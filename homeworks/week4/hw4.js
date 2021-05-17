const request = require('request')

request(
  {
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'wxdvxvem2tnmt9yjekate08q8cmjl6'
    }
  },
  (error, response, body) => {
    if (error) {
      return console.log(response.statusCode)
    }
    const data = JSON.parse(body)
    for (let i = 0; i < data.top.length; i++) {
      console.log(`${data.top[i].viewers}  ${data.top[i].game.name} `)
    }
  }
)
