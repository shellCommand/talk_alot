import { useState } from 'react'
import TickIcon from './TickIcon'
import Modal from './Modal'

const ListItem = ({message}) => {
const [showModal, setShowModal] = useState(false)
  return (
    <li className="List-Item">
      <div className='message-container'>
      <TickIcon/>
      <p className='date'>{message.date.split('T')[0]}</p>
        <p className='messages'><span className='user-name'>{message.user_email}</span>:  {message.title}</p>
        <div className='button-container'>
          <button className='edit' onClick={() => setShowModal(true)}>EDIT</button>
          <button className='delete'>DELETE</button>
        </div>
        {showModal && <Modal mode={'Edit'} setShowModal={setShowModal} message={message} />}
      </div>

    </li>
  )
}

export default ListItem
