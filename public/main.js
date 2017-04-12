console.log("js connected");

$(document).ready(function(){

  $.get('/data').then(function(data){
    console.log(data);



    document.querySelector('#container').addEventListener('click', function(event){
      if(event.target.classList.contains('grid')){
        //console.log(event.target.parentElement);
        let temp = event.target.parentElement
        posArr = findPos(temp.getBoundingClientRect());
        console.log(posArr);
      }

    })


  })
})
var container = $('#container')
var containerPos = $('#container').offset()

function findPos(rect){
  let tempArr = []
  tempArr[0] = Math.floor((rect.top - containerPos.top) /64)
  tempArr[1] = Math.floor((rect.left - containerPos.left) /64)
  return tempArr
}
