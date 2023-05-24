const PORT = process.env.PORT ?? 8000
const express = require('express')
const { v4: uuidv4} = require('uuid')
const app = express()
const cors = require('cors')
const pool = require('./db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// import { createClient } from '@supabase/supabase-js'
//
// const supabaseUrl = 'https://midjkzsugjmjeummrcoy.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)

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
    const editMessages = await pool.query('UPDATE messages SET user_email = $1, title = $2, date = $3 WHERE   id = $4;',
      [user_email, title, date, id])
    res.json(editMessages)
    console.log('EDIT MESSAGES', res.json(editMessages))
  } catch(err) {
    console.error(err)
  }
})

//delete message
app.delete('/messages/:id', async(req, res) => {
  const { id } = req.params
  try {
    const deleteMessage = await pool.query('DELETE FROM messages WHERE id = $1;', [id])
    res.json(deleteMessage)
  } catch(err) {
    console.error(err)
  }
})

//signup
app.post('/signup', async(req, res) => {
  const { email, password } = req.body
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)

  try {
    const signUp = await pool.query(`INSERT INTO users (email, hashed_password) VALUES($1, $2)`,
      [email, hashedPassword])

      const token = jwt.sign({ email }, 'secret', {expiresIn: '1hr'})

      res.json({ email, token })
  } catch(err) {
    console.error(err)
    if (err) {
      res.json({ detail: err.detail})
    }
  }
})

//login
app.post('/login', async(req, res) => {
  const { email, password } = req.body
  try {
    const users = await pool.query(`SELECT * FROM users WHERE email = $1`, [email])

    if (!users.rows.length) return res.json({ detail: 'User does not exist'})

    const success = await bcrypt.compare(password, users.rows[0].hashed_password)
    const token = jwt.sign({ email }, 'secret', {expiresIn: '1hr'})

    if(success) {
      res.json({ 'email' : users.rows[0].email, token})
    } else {
      res.json({ detail: 'Login failed'})
    }
  } catch(err) {
    console.error(err)
  }
})


app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))
