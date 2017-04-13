console.log("js connected")


$(document).ready(function(){

  xx = 1
  yy = 1
  var patchArr = data.picture[xx][yy].patch
  var canvas = $('#canvas')
  var selectedColor = '#ffffff'
  var colorPick = $('#colorPick')



  drawCanvas(patchArr)
  $('#patchPos').html(xx +", "+ yy)

  $('#palette').click(function(event){
    selectedColor = event.target.style.backgroundColor
    console.log(selectedColor);
    console.log($('#colorPick'));
    //$('#colorPick').style.backgroundColor = selectedColor
  })

  $('#canvas').click(function(event){
    console.log(event.target);
    if(event.target.classList.contains('pixel')){
      console.log(event.target);
      event.target.style.backgroundColor = selectedColor
   }
  })



})


const R = '#c21b1b'
const W = '#ffffff'
const GR = '#9c9c9c'
const B = '#1b69df'
const Y = '#f0ee4d'
const G = '#40bd2b'
const O = '#de900b'

function drawCanvas(arr){
  var palletArr = [R, W, GR, B, Y, G, O]
  var canvas = $('#canvas')
  for(let i=0; i< arr.length; i++){
    for(let n=0; n< arr[i].length; n++){
      let tempDiv = document.createElement('div')
      tempDiv.className = 'pixel'
      tempDiv.style.backgroundColor = arr[i][n]
      canvas.append(tempDiv)
    }
  }
  for(let p = 0; p< palletArr.length; p++){
    let tempPaint = document.createElement('div')
    tempPaint.className = 'paint'
    tempPaint.style.backgroundColor = palletArr[p]
    $('#palette').append(tempPaint)

  }
}
