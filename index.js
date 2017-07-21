const request = require('request')
const dotenv = require('dotenv').config()
const argv = require('yargs').argv

const apiKey = process.env.OWM_KEY
let city = argv.c || 'wellington'
let units ='metric' // imperial - if unspecified, body.main.temp is in degrees kelvin
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
console.log('args', process.argv);

request(url, (err, response, body) => {
  if (err) {
    console.error({error});
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`
    console.log({body});
    console.log(message);
  }
})
