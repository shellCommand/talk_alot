const PORT = process.env.PORT ?? 8000
const express = require('express')
const app = express()
const pool = require('./db')

app.get('/', (req, res) => {
  res.send('hola mundo')
})

//get all messages
// app.get('/messages', (req, res) => {
//   try {
//     const messages = pool.query('SELECT * FROM messages')
//     res.json(messages.rows)
//   } catch (err) {
//     console.error(error)
//   }
// })

app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
