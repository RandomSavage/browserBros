
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




//-----------------This section is for the image zoom------------------


// This part keeps the window from scrolling when you are targeting the image for zooming

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}
// This renables or resets the ability to scroll (stops resetting the window offset)
function enableScroll() {
  window.onscroll = function() {};
}


//Targets the image section and sets a starting scale(height , width)
let myImg = document.querySelector('.top-header__user-img')
let spotHeight = 1
let spotWidth = 1

// set event looking for wheel up or down and allows to scale up by .5 at a time until 5 times or (whatever) original dimension it allows to scale down until it reaches the original scale and prevents further scale down (spotHeight === 1) then allows window scroll again
myImg.addEventListener('wheel', (e) => {
  disableScroll()
  for(let i = 0; i < 2; i += 1) {
    if(e.deltaY < 0 && spotHeight <= 5) {
      spotHeight += .5
      spotWidth += .5 
      myImg.style.transform = `scale(${spotWidth}, ${spotHeight})`
      scrollTop = 0
      console.log(myImg.style.height)
    } else if(e.deltaY > 0 && spotHeight >= 1){
        spotHeight -= .5
        spotWidth -= .5
        myImg.style.transform = `scale(${spotWidth}, ${spotHeight})`
        scrollTop = 0
    }else {
      e.deltaY === e.deltaY
      scrollTop = 0
      enableScroll()
    }
  }
})

//-----------------This [Ends] the section for the image zoom------------------





