
//-------The first forms placeholder code

let dateObject = {
  month: "00",
  day: "00",
  year: "0000",
  seperator: "/"
}

let inputFrame = `${dateObject.month} ${dateObject.seperator} ${dateObject.day} ${dateObject.seperator} ${dateObject.year}`

console.log(inputFrame)

let dateFrame = document.getElementById('dateFrame')
dateFrame.placeholder = inputFrame

//-------------------End Of Place Holder-----------------------

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

  myFunK()

  dateCollector.push(displayDate)
  console.log(dateCollector)

}
myBtn.addEventListener('click', collateDate)




//Code Purgatory:
/*
let myDay = document.getElementsByName('day')
let myYear = document.getElementsByName('year') 

let formRead = document.createElement('h2')
formRead.innerText = myForm.month.value
myForm.append(formRead)

*/