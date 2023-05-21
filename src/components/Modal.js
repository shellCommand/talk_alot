const Modal = () => {
  let mode = 'Create'
  const handleChange = () => {
    console.log('changing')
  }

  return (
    <div className='overlay'>
      <div className='modal'>
        <div>
          <h3>{mode} new message</h3>
          <button>X</button>
        </div>
          <form className='form-title-container'>
            <input
              required
              maxLength={5000}
              placeholder='Type away...'
              name='title'
              value={''}
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
