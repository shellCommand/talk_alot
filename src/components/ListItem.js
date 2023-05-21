const ListItem = ({message}) => {
  return (
    <div className="List-Item">
      <p>{message.user_email}:  {message.title}</p>
    </div>
  )
}

export default ListItem
