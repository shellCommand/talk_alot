import { useState } from 'react'

const Modal = ({ mode, setShowModal, getData, message }) => {
  const editMode = mode === 'Edit' ? true : false
  // console.log(mode, message)

  const [data, setData] = useState({
    user_email: editMode ? message.user_email : 'kanye@test.com',
    title: editMode ? message.title : '',
    date: editMode ? new Date() : '',
  })

  const postData = async (e) => {
    e.preventDefault(e)
    try {
      const response = await fetch(`http://localhost:8000/messages`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        console.log('worked')
        setShowModal(false)
        getData()
      }
    } catch(err) {
      console.error(err)
    }
  }

const editData = async (e) => {
  e.preventDefault()
  try {
    const response = await fetch(`http://localhost:8000/messages/${message.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
      if (response.status === 200) {
        setShowModal(false)
        getData()
      }
  } catch(err) {
    console.error(err)
  }
}


  const handleChange = (e) => {
    const { name, value } = e.target
    setData(data => ({
      ...data,
      [name] : value
    }))
    console.log(data)
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='form-title-container'>
          <h3>{mode} message</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
          <form>
            <textarea className='message-input'
              required
              maxLength={5000}
              placeholder='Type away...'
              name='title'
              value={data.title}
              onChange={handleChange}
             />
             <br/>
            <input className={mode} type='submit' onClick={editMode ? editData : postData}/>
          </form>
      </div>
    </div>
  )
}

export default Modal
