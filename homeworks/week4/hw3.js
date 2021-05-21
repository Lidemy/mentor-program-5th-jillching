const request = require('request')
const process = require('process')

const name = process.argv[2]
request(
  `https://restcountries.eu/rest/v2/name/${name}`,
  (error, response, body) => {
    if (error) {
      console.log(response.statusCode)
      return
    }
    const data = JSON.parse(body)
    if (data.message === 'Not Found') {
      console.log('找不到國家資訊')
      return
    }
    for (let i = 0; i < data.length; i++) {
      console.log('============')
      console.log(`國家：${data[i].name}`)
      console.log(`首都：${data[i].capital}`)
      console.log(`貨幣：${data[i].currencies[0].code}`)
      console.log(`國碼：${data[i].callingCodes}`)
    }
  }
)
