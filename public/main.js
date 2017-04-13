console.log("js connected")


$(document).ready(function(){
  var user, xx, yy
  $.get('/data').then(function(data){


    document.querySelector('#container').addEventListener('click', function(event){
      if(event.target.classList.contains('grid')){
        //console.log(event.target.parentElement)
        let temp = event.target.parentElement
        posArr = findPos(temp.getBoundingClientRect())
        console.log(posArr);
      }

    })

    $('#patchButton').click(function(){
      user = $('#userCode').val();
      xx = $('#userX').val();
      yy = $('#userY').val();
      if(user != "" && xx != "" && yy != ""){
        console.log("not empty");
        document.location.href = '/patcher/'
      } else {
        console.log("empty");
      }
    })

  })
})






function findPos(rect){
  var containerPos = $('#container').offset()
  let tempArr = []
  tempArr[0] = Math.floor((rect.top - containerPos.top) /64)
  tempArr[1] = Math.floor((rect.left - containerPos.left) /64)
  return tempArr
}
