const request = require('request')


const geocode = (address , callback ) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHJpcHRqb3QiLCJhIjoiY2tteWRlYzljMDJ2ZzJ3bWZ2NmQwdHdmYSJ9.UQKYJIEQqpoA_zvCy8ZIqw&limit=1'

    request ({url , json:true} , (error , {body})=> {
        if (error ) {
            callback('Unable to connect to location services !!!' , undefined)
        }
        else if (body.features.lenght === 0) {
            callback('Unable to find location !!!' , undefined)
        }
        else {
            callback(undefined , {
                latitude: body.features[0].center[0] ,
                longitiude: body.features[0].center[1] ,
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode 