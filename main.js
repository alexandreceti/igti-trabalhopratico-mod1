window.addEventListener('load', start)

var cor = [0,0,0]
var controlRed = document.querySelector('#rangeRed')
var controlGreen = document.querySelector('#rangeGreen')
var controlBlue = document.querySelector('#rangeBlue')

var textRed = document.querySelector('#textRed')
var textGreen = document.querySelector('#textGreen')
var textBlue = document.querySelector('#textBlue')

function  start() {
  controlRed.addEventListener('change', upRed)
  controlGreen.addEventListener('change', upGreen)
  controlBlue.addEventListener('change', upBlue)
  resetValues()
  changeColor()
}

function resetValues() {
  controlRed.value = 0
  controlGreen.value = 0
  controlBlue.value = 0
}

function upRed(event) {
  console.log(event.target.value)
  cor[0] = event.target.value
  console.log(cor)
  changeColor()
}

function upGreen(event) {
  console.log(event.target.value)
  cor[1] = event.target.value
  console.log(cor)
  changeColor()
}

function upBlue(event) {
  console.log(event.target.value)
  cor[2] = event.target.value
  console.log(cor)
  changeColor()
}

function changeColor () {
  var divColor = document.querySelector('#cor')
  divColor.style.backgroundColor = `rgb(${cor[0]},${cor[1]},${cor[2]})`
  textRed.value = cor[0]
  textGreen.value = cor[1]
  textBlue.value = cor[2]
  // divColor.style["background-color"] = `rgb(${cor[0]},${cor[1]},${cor[2]})`
  // console.log(`rgb(${cor[0]},${cor[1]},${cor[2]})`)
}
