import TickItem from './TickItem'
import ReadMessage from './ReadMessage'

const ListItem = ({message}) => {
  return (
    <li className="List-Item">
      <div className='message-container'>
        <TickItem/>
        <p className='messages'><span className='user-name'>{message.user_email}</span>:  {message.title}</p>
        <ReadMessage/>
        <div className='button-container'>
          <button className='edit'>EDIT</button>
          <button className='de;ete'>DELETE</button>
        </div>
      </div>

    </li>
  )
}

export default ListItem
