const PORT = process.env.PORT ?? 8000
const express = require('express')
const { v4: uuidv4} = require('uuid')
const app = express()
const cors = require('cors')
const pool = require('./db')

app.use(cors())
app.use(express.json())
// app.get('/', (req, res) => {
//   res.send('hola mundo')
// })


//get all messages
app.get('/messages', async (req, res) => {
  // const { userEmail } = req.params
  // const { userEmail } = 'gitResetHead@pm.me'
  try {
    // const messages = await pool.query('SELECT * FROM messages LIMIT 1')
    const messages = await pool.query('SELECT * FROM messages')
    // const messages = await pool.query('SELECT * FROM messages WHERE user_email = $1', [userEmail])
    res.json(messages.rows)
  } catch (err) {
    console.error(err)
  }
})


//create a new message
app.post('/messages', (req, res) => {
  const {user_email, title, date} = req.body
  console.log('PASS THRU 3 THINGS', user_email, title, date)
  const id = uuidv4()
  try {
    pool.query(`INSERT INTO messages(id, user_email, title, date) VALUES($1, $2, $3, $4)`,
    [id, user_email, title, date])
  } catch(err) {
    console.error(err)
  }
})


app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
