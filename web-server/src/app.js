const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../src/utils/geocode')
const forecast = require('../src/utils/forecast')

const app = express()  


// DEFINE PATHE FOR EXPRESS CONFIG
const publicDiractoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, "../templates/views")
const partialPAth = path.join(__dirname, "../templates/partials")


// // SETUP STATIC DIRACTORY TO SERVE
app.use(express.static(publicDiractoryPath))

// SETUP HANDLEBARS ENGINS AND VIEWS LOCATION
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPAth)


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Jay Kanani'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Jay Kanani'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP',
        name: 'Jay Kanani'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address)
        return res.send({
            error: "you must provide address term"
        })
        // console.log(req.query.address)
    geocode(req.query.address, (error, { latitude, longitude,location }={}) => {
        if (error) {
            return res.send({ error })
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({  
                forecast:forecastData,
                location:location,
                // address: req.query.address
                
            })
        })
    })

})

//for query use this url: http://localhost:5000/products?search=games&rating=5
app.get('/products', (req, res) => {
  
    if (!req.query.search) {
        return res.send({
            error: 'you must provide search term'
        })

    }

        // console.log(req.query.search)
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'JAY KANANI',
        errorMessage: 'help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'JAY KANANI',
        errorMessage: 'page not found'
    })
})



app.listen(5000, () => {
    console.log('port is runiing...(at 3000)')
})



