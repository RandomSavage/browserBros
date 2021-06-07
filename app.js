


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

let myBtn = document.getElementById('myBtn')

let myFunK = () => {
  let myMonth = document.querySelector('.mizunth')

  myMonth.style.backgroundColor = "green"
}

let dateCollector = []
 let collateDate = (e) => {
   e.preventDefault()
   let myForm = document.getElementById("customForm")
   let myDay = document.getElementsByName('day')
   let myYear = document.getElementsByName('year')
   let displayDate = `${myForm.month.value}/${myForm.day.value}/${myForm.year.value}`
   let checkDate = document.createElement('h1')
   checkDate.innerText = displayDate
   myForm.append(checkDate)
   console.log(displayDate)

  myFunK()

   dateCollector.push(myForm.month.value, myForm.day.value, myForm.year.value)
   console.log(dateCollector)
  
 }
myBtn.addEventListener('click', collateDate)