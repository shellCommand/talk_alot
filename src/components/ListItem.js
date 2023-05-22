import { useState } from 'react'
import TickIcon from './TickIcon'
import Modal from './Modal'
import ReadMessage from './ReadMessage'

const ListItem = ({ message, getData }) => {
const [showModal, setShowModal] = useState(false)
  return (
    <li className="List-Item">
      <div className='message-container'>
      <TickIcon/>
        <p className='messages'><span className='user-name'>{message.user_email}</span>:  {message.title}</p>
        <ReadMessage/>
        <div className='button-container'>
          <button className='edit' onClick={() => setShowModal(true)}>EDIT</button>
          <button className='delete'>DELETE</button>
        </div>
        {showModal && <Modal mode={'Edit'} setShowModal={setShowModal} message={message} getData={getData} />}
      </div>

    </li>
  )
}

export default ListItem
