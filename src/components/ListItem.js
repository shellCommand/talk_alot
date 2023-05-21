import TickIcon from './TickIcon'
import ReadMessage from './ReadMessage'

const ListItem = ({message}) => {
  return (
    <li className="List-Item">
      <div className='message-container'>
      <TickIcon/>
        <p className='messages'><span className='user-name'>{message.user_email}</span>:  {message.title}</p>
        <ReadMessage/>
        <div className='button-container'>
          <button className='edit'>EDIT</button>
          <button className='delete'>DELETE</button>
        </div>
      </div>

    </li>
  )
}

export default ListItem
