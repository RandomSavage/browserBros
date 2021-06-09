let boxTop = 200
let boxLeft = 200

console.log(window.innerHeight)
console.log(window.innerWidth)

let myBox = document.getElementById('box')


let onKeyDown = (event) => {
  if("ArrowUp" === event.code) {
    if(boxTop >= 10) {
      boxTop -= 10
    }
  } else if("ArrowDown" === event.code) {
    if(boxTop <= window.innerHeight)
    boxTop += 10
  }else if("ArrowRight" === event.code) {
    if(boxLeft >= 0 && boxLeft <= window.innerWidth) {
    boxLeft += 10
    }
  } else if("ArrowLeft" === event.code) {
    if(boxLeft >= 10) {
    boxLeft -= 10
    }
  }
  myBox.style.top = boxTop + "px"
  myBox.style.left = boxLeft + "px"
}

document.addEventListener('keydown', onKeyDown)

let myBtn = document.createElement('button')
myBtn.style.position = "fixed"
myBtn.style.padding = "10px"
myBtn.innerText = "RESET"
document.body.append(myBtn)
myBtn.addEventListener('click', () => {
  boxTop = 200;
  boxLeft = 200;
  myBox.style.top = boxTop + "px"
  myBox.style.left = boxLeft + "px"
})



/* let onKeyDown = (event) => {
  if("ArrowUp" === event.code) {
    boxTop -= 10
  } else if("ArrowDown" === event.code) {
    boxTop += 10
  }else if("ArrowRight" === event.code) {
    boxLeft += 10
  } else if("ArrowLeft" === event.code) {
    boxLeft -= 10
  }
  myBox.style.top = boxTop + "px"
  myBox.style.left = boxLeft + "px"
} */