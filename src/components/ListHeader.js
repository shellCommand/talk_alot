import Modal from './Modal'
import { useState } from 'react'

const ListHeader = ({ listName }) => {
const [showModal, setShowModal] = useState(true)

  const signout = () => {
    console.log('signout')
  }

  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className='button-container'>
        <button className='create' onClick={() => setShowModal(true)}>ADD NEW</button>
        <button className='signout' onClick={signout}>SIGN OUT</button>
      </div>
      {showModal && <Modal mode={'Create'} setShowModal={setShowModal}/>}
    </div>
  )
}

export default ListHeader
