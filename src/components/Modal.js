import { useState } from 'react'

const Modal = ({ mode, setShowModal, message }) => {
  // const mode = 'create'
  const editMode = mode === 'Edit' ? true : false
  console.log(mode, message)
  const [data, setData] = useState({
    user_email: editMode ? message.user_email : '',
    title: editMode ? message.title : '',
    // date: new Date()
    date: editMode ? '' : new Date(),
  })

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
            <input className='message-input'
              required
              maxLength={5000}
              placeholder='Type away...'
              name='title'
              value={data.title}
              onChange={handleChange}
             />
             <br/>
            <input className={mode} type='submit'/>
          </form>
      </div>
    </div>
  )
}

export default Modal
