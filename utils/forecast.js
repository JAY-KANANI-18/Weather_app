const request = require("request")



const forecast = (lattitude, longitude, callback) => {
    const url = `   `
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("not able to connect with locarion service", undefined)

        } else if (response.body.error) {
            callback("location not found,try anoyther search", undefined)
        } else {
            callback(undefined, {
                location_name: response.body.location.name
            })

        }
    })

}




module.exports = forecast