
//-------The first forms placeholder code

let dateObject = {
  month: "mm",
  day: "dd",
  year: "yyyy",
  seperator: "/"
}

let inputFrame = `${dateObject.month} ${dateObject.seperator} ${dateObject.day} ${dateObject.seperator} ${dateObject.year}`

console.log(inputFrame)

let dateFrame = document.getElementById('dateFrame')
dateFrame.placeholder = inputFrame

//-------------------End Of Place Holder-----------------------


//Going for a filter

let dateFrame2 = document.getElementById('dateFrame2')
let dateFrame2_data = document.querySelector('.dateFrame2_data')
dateFrame2.placeholder = "mm/dd/yyyy"
// let dateInput = dateFrame2_data.innerText

dateFrame2.addEventListener('change', () => {
  dateFrame2.style.backgroundColor = "cyan"
  // dateFrame2_data.innerText = dateFrame2.value
})

dateFrame2.addEventListener('keydown', (e) => {
  if(dateFrame2_data.innerText.length <= 9) {
    dateFrame2_data.innerText += `${e.key}`
    if(dateFrame2_data.innerText.match(/^\d{2}$/) !== null) {
      dateFrame2_data.innerText += `/`
    } else if(dateFrame2_data.innerText.match(/^\d{2}\/\d{2}$/) !== null) {
        dateFrame2_data.innerText += `/`
    } else if(e.key === "Backspace") {
      console.log(e.key)
    }
   }
  })


//--------------------End Going For A Filter--------------------




let myBtn = document.getElementById('myBtn')
let formRead = document.getElementById('formRead')

let myFunK = () => {
  let myMonth = document.querySelector('.mizunth')

  myMonth.style.backgroundColor = "red"
}


let dateCollector = []
let collateDate = (e) => {
  e.preventDefault()

  let myForm = document.getElementById("customForm")

  formRead.innerText = ""
  formRead.style.color = "#fff"
  myForm.style.backgroundColor = "transparent"

  if(myForm.month.value > 12 || myForm.month.value < 1) {
    myFunK()
    formRead.innerText = "Month Value must be between 1 & 12 only"
  }
  let displayDate = `${myForm.month.value}/${myForm.day.value}/${myForm.year.value}`

  let checkDate = document.getElementById('checkDate')
  checkDate.innerText = displayDate
  console.log(displayDate)

  // myFunK()

  dateCollector.push(displayDate)
  console.log(dateCollector)

}
myBtn.addEventListener('click', collateDate)

let myDay = document.getElementById('dizzay')
console.log(`Test1: ${myDay}`)
myDay.addEventListener('change', () => {
  myDay.style.backgroundColor = "cyan"
})


//Code Purgatory:
/*
let myDay = document.getElementsByName('day')
let myYear = document.getElementsByName('year') 

let formRead = document.createElement('h2')
formRead.innerText = myForm.month.value
myForm.append(formRead)

*/


// https://gist.github.com/chrisjpatty/b0760e1973ca765e7a31d6be7d0ca861
/* const maskDate = value => {
  let v = value.replace(/\D/g,'').slice(0, 10);
  if (v.length >= 5) {
    return `${v.slice(0,2)}/${v.slice(2,4)}/${v.slice(4)}`;
  }
  else if (v.length >= 3) {
    return `${v.slice(0,2)}/${v.slice(2)}`;
  }
  return v
} */

let myImg = document.querySelector('.top-header__user-img')
let spotHeight = 1
let spotWidth = 1
/* myImg.addEventListener('wheel', (e) => {
  for(let i = 0; i < 10; i += 1) {
    spotWidth += .1
    spotHeight += .1
    myImg.style.transform = `scale(${spotWidth}, ${spotHeight})`

  }
}) */

/* function detectMouseWheelDirection( e )
{
    var delta = null,
        direction = false
    ;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDelta ) { // will work in most cases
        delta = e.wheelDelta / 60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}
function handleMouseWheelDirection( direction )
{
    console.log( direction ); // see the direction in the console
    if ( direction == 'down' ) {
        // do something, like show the next page
    } else if ( direction == 'up' ) {
        // do something, like show the previous page
    } else {
        // this means the direction of the mouse wheel could not be determined
    }
}
document.onmousewheel = function( e ) {
    handleMouseWheelDirection( detectMouseWheelDirection( e ) );
};
if ( window.addEventListener ) {
    document.addEventListener( 'DOMMouseScroll', function( e ) {
        handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    });
} */



myImg.addEventListener('wheel', (e) => {
  for(let i = 0; i < 10; i += 1) {
    if(e.deltaY > 0) {
      spotHeight += 1
      spotWidth += 1
      myImg.style.transform = `scale(${spotWidth}, ${spotHeight})`
    } else if(e.deltaY < 0) {
      spotHeight -= 1
      spotWidth -= 1
      myImg.style.transform = `scale(${spotWidth}, ${spotHeight})`
    }

  }
  // myImg.classList.add('scaleDown')
}, {passive: true})


/* myImg.addEventListener('wheel', (e) => {
  disableScroll()
  for(let i = 0; i < 3; i += 1) {
    if(e.deltaY < 0) {
      spotHeight += 1
      spotWidth += 1
      myImg.style.transform = `scale(${spotWidth}, ${spotHeight})`
      scrollTop = 0
    } else if(e.deltaY > 0) {
      spotHeight -= 1
      spotWidth -= 1
      myImg.style.transform = `scale(${spotWidth}, ${spotHeight})`
      scrollTop = 0
    } else if(e.deltaY === 0) {
      spotWidth = 0
      spotHeight = 0
      myImg.style.height = "400px"
      myImg.style.width = "600px"
    }
  }
}) */

// myImg.addEventListener('mouseleave', enableScroll())