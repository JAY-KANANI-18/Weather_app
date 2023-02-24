const request = require("request")



const forecast = (lattitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f81382a3773ba8ef038e7d771d12ec81&query=${longitude},${lattitude}`
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("not able to connect with locarion service", undefined)

        } else if (response.body.error) {
            callback("location not found,try anoyther search", undefined)
        } else {
            forekast = `${response.body.current.weather_descriptions} and Current temperature at ${response.body.current.temperature} Degree celsius and feels like ${response.body.current.feelslike} Degree selsius and chances of rain is ${response.body.current.precip}%`
            loc = response.body.location.name + ',' + response.body.location.country
            callback(undefined,{
                forekast,
                loc
            }
            
            )

        }
    })

}




module.exports = forecast