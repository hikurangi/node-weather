const request = require('request')
const dotenv = require('dotenv').config()

const apiKey = process.env.OWM_KEY

request(url, (err, response body) => {
  if (err) {
    console.error({error});
  } else {
    console.log({body});
  }
})
