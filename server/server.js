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
app.get('/messages', async(req, res) => {
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
app.post('/messages', async(req, res) => {
  const {user_email, title, date} = req.body
  console.log('PASS THRU 3 THINGS', user_email, title, date)
  const id = uuidv4()
  try {
    const newMessage = await pool.query(`INSERT INTO messages(id, user_email, title, date) VALUES($1, $2, $3, $4)`,
    [id, user_email, title, date])
    res.json(newMessage)
  } catch(err) {
    console.error(err)
  }
})

//edit a message
app.put('/messages/:id', async(req, res) => {
  const { id } = req.params
  const { user_email, title, date } = req.body
  try {
    const editMessages = await pool.query('UPDATE messages SET user_email = $1, title = $2, date = $3 WHERE id = $4;', [user_email, title, date, id])
    res.json(editMessages)
    console.log('EDIT MESSAGES', res.json(editMessages))
  } catch(err) {
    console.error(err)
  }
})


app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
