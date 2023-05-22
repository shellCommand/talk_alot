import { useState } from 'react'

const Modal = () => {
  const mode = 'create'
  const editMode = mode === 'edit' ? true : false

  const [data, setData] = useState({
    user_email: '',
    title: '',
    // date: new Date()
    date: editMode ? '' : new Date()
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
          <button>X</button>
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
