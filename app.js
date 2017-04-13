
var express = require('express')
var app = express()
const bodyParser = require('body-parser')

const R = '#c21b1b'
const W = '#ffffff'
const GR = '#9c9c9c'
const B = '#1b69df'
const Y = '#f0ee4d'
const G = '#40bd2b'

var data = require('./quilt')
//console.log(data);
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {data})
})

app.get('/patcher', function(req, res){
  res.render('patcher', {data})
})

app.get('/data', function(req, res){
  res.json(data)
})

app.post('/index', (req, res) => {

})

var boxSize = 4
var gridSize = data.picture[0][0].length
//var container = document.querySelector('#container')



// var flagGrid =[
//   [GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE],
//   [WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY],
//   [GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE],
//   [WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY],
//   [GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE],
//   [WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY],
//   [GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE],
//   [WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY],
//   [GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE],
//   [WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY],
//   [GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE],
//   [WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY],
//   [GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE],
//   [WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY],
//   [GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE],
//   [WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY, WHITE, GREY]
// ]


//drawGrdid()

function drawGrid(color){
  container.style.width = (gridSize * boxSize + (gridSize*2))+"px";
  container.style.height = (gridSize * boxSize + (gridSize*2)) +"px";
  for(let i=0; i <gridSize; i++){
    for(let n=0; n<gridSize; n++){
      //console.log('n: '+n+ ' i: '+i);
      let gridBox = document.createElement('div');
      gridBox.className = 'grid'
      gridBox.style.backgroundColor = color[i][n]
      gridBox.style.width = boxSize + "px";
      gridBox.style.height = boxSize + "px";
      container.appendChild(gridBox)
    }
  }
}


app.get('/', function(req, res){
  //at index.hbs THEN the object to send

  res.render('index', {data, title: "my Store's Inventory"})
})

app.listen(3000, function(){
  console.log("listening on port 3000");
})
