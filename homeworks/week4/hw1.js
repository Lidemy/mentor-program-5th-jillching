const request = require('request')

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) {
      return console.log(response.statusCode)
    }
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].id}  ${data[i].name}`)
    }
  }
)
