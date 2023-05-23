import { useState } from 'react'
import TickIcon from './TickIcon'
import Modal from './Modal'

const ListItem = ({message, getData}) => {
const [showModal, setShowModal] = useState(false)

  const deleteItem = async() => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/messages/${message.id}`, {
        method: 'DELETE'
      })
      if (response.status === 200) {
        getData()
      }
    } catch(err) {
      console.error(err)
    }
  }

  // <TickIcon/>
  return (
    <li className="List-Item">
      <div className='message-container'>
      <p className='date'>{message.date.split('T')[0]}</p>
        <p className='messages'><span className='user-name'>{message.user_email}</span>:  {message.title}</p>
        <div className='button-container'>
          <button className='edit' onClick={() => setShowModal(true)}>EDIT</button>
          <button className='delete' onClick={deleteItem}>DELETE</button>
        </div>
        {showModal && <Modal mode={'Edit'} setShowModal={setShowModal} message={message} getData={getData} />}
      </div>

    </li>
  )
}

export default ListItem
