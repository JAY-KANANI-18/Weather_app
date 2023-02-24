const request = require("request")



const geocode = (address,callback)=>{
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiajEyMzQ1Njc4IiwiYSI6ImNsZWNpMGV4OTFqN3MzcHBrN3J4Njhlb2oifQ.4Y09os9gg2KtBHDtNRvVfw`

    request({url:url,json:true},(error,{body})=>{     //here we use short hand object destructuring{body}
        if (error){
            callback("unable to connect location service",undefined)
        }else if(body.features.length === 0){
            callback('unable to find location ,try another search',undefined)
        }else{
            callback(undefined,{
                longitude : body.features[0].center[0],
                latitude: body.features[0].center[1],
                // location: response.body.features[0].place_name
            })  

        }
    })


}


module.exports = geocode
