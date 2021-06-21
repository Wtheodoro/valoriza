import express from 'express'

const app = express()

app.get('/test', (request, response) => {
  return response.send('Olá Walison')
})

app.post('/test-post', (request, response) => {
  return response.send('Olá Walison, esse é o método post')
})

// http://localhost:3000
app.listen(3000, () => console.log('Server is running!')) 