const request = require('request')
const dotenv = require('dotenv').config()

const apiKey = process.env.OWM_KEY
let city = 'wellington'
let url = `http://api.openweathermap.org/data/2.5/weather?g=${city}&appid=${apiKey}`

request(url, (err, response body) => {
  if (err) {
    console.error({error});
  } else {
    console.log({body});
  }
})
