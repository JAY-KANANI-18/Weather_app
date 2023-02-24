
const request = require("request")
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')


// let url = "http://api.weatherstack.com/current?access_key=c760d70c061dc34eb26237629276a82e&query=33337.8267"

// request({url:url, json:true},(error,response)=>{

//     if(error){

//         console.log("can not getting Weather service!!")

//     }else if(response.body.error){

//         console.log("can not getting location!!")

//     }else{

//     const data = JSON.parse(response.body)
//     console.log(data.current.weather_descriptions + "Current Temperature at "+ data.location.name +  " is : " + data.current.temperature +" Degree and feels Like : " +  data.current.feelslike + " Degree and percenrage of rain is : " + dat:response.body.feature[0].center[0]a.current.precip +"%")
//     }
//     // console.log(data.current)

// })

// url ="https://api.mapbox.com/geocoding/v5/mapbox.places/delhi.json?access_token=pk.eyJ1IjoiajEyMzQ1Njc4IiwiYSI6ImNsZWNpMGV4OTFqN3MzcHBrN3J4Njhlb2oifQ.4Y09os9gg2KtBHDtNRvVfw"
// request({url : url, json:true},(error,response)=>{

//     if(error){

//         console.log("can not getting Weather service!!")

//     }else if(response.body.features.length === 0 ){
// :response.body.feature[0].center[0]
//         console.log("can not getting location!!")

//     }else{

//         // const data = JSON.parse(response.body)
//         console.log(response.body.features[0].center[0])
//         console.log(response.body.features[0].center[1])
//     }
//     })






// geocode('boston',(error,data)making HTTP request using request module,use weather stack API to get weather dataerror,data)=>{
//     console.log('Error',error)
//     console.log('Data',data)
// })




// geocode('boston',(error,data)=>{
//     console.log('Error',error)
//     console.log('Data',data) 
//     forecast(data.latitude,data.longitude,(error,data)=>{
//         console.log('Error',error)
//         console.log('Data',data)
//     })

// })



geocode('boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    if (error) {
        return console.log(error)
    }
    forecast(data.longitude, data.latitude, (error, data) => {
        if (error) {
            return console.log(error)
        }
        console.log('Error', error)
        console.log('Data', data)
    })
    
})



