console.log("client side js")


// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


// fetch('http://localhost:5000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })

// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const m1 = document.querySelector('#message-1')
const m2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
   m1.textContent = "Loading..."
    m2.textContent = ""

    fetch(`http://localhost:5000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                m1.textContent = data.error
                
            } else {
                m1.textContent = data.forecast.forekast
                m2.textContent = data.location  
 
            }
        })

    })

})



