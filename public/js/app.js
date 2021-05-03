// console.log ("Client side javascript is loaded...")

const WeatherForm= document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#Message-1')
const messageTwo = document.querySelector('#Message-2')

// messageOne.textContent = ' From Javascript By STG.'

WeatherForm.addEventListener('submit' , (e) => { 
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) => {
        response.json().then((data) => {
           if (data.error) {
               messageOne.textContent = data.error
           }
           else {
               messageOne.textContent= data.location
               messageTwo.textContent = data.forecast
            //   console.log(data.location)
            //   console.log(data.forecast) 
           }
        })
    })

})