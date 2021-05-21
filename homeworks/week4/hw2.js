const request = require('request')
const process = require('process')

const act = process.argv[2]
const actID = process.argv[3]
const newName = process.argv[4]

// 印出前20本書
const listBook = () => {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      if (error) {
        console.log(response.statusCode)
        return
      }
      const data = JSON.parse(body)
      for (let i = 0; i < data.length; i++) {
        console.log(`${data[i].id}  ${data[i].name}`)
      }
    }
  )
}

// 輸出書名
const readBook = (id) => {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${actID}`,
    (error, response, body) => {
      if (error) {
        console.log(response.statusCode)
        return
      }
      const data = JSON.parse(body)
      console.log(data.name)
    }
  )
}

// 刪除書籍
const deleteBook = (id) => {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${actID}`,
    (error, response, body) => {
      if (error) {
        console.log(response.statusCode)
        return
      }
      console.log('success')
    }
  )
}

// 新增書籍
const createBook = (name) => {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: {
        name
      }
    },
    (error, response, body) => {
      if (error) {
        console.log(response.statusCode)
        return
      }
      const data = JSON.parse(body)
      console.log(data.id, data.name)
    }
  )
}

// 更新書籍
const updateBook = (id, newName) => {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${actID}`,
      form: {
        name: newName
      }
    },
    (error, response, body) => {
      if (error) {
        console.log(response.statusCode)
        return
      }
      const data = JSON.parse(body)
      console.log(data.id, data.name)
    }
  )
}

// 參數
switch (act) {
  case 'list':
    listBook()
    break
  case 'read':
    readBook(actID)
    break
  case 'delete':
    deleteBook(actID)
    break
  case 'create':
    createBook(actID)
    break
  case 'update':
    updateBook(actID, newName)
    break
  default:
    console.log('Please enter list, read, delete, create or update')
}
