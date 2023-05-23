import ListHeader from './components/ListHeader'
import { useEffect, useState } from 'react'
import ListItem from './components/ListItem'
import Auth from './components/Auth'

const App = () => {
  const [messages, setMessages] = useState(null)
  // const userEmail = 'gitResetHead@pm.me'

  const authToken = false

  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVERURL}/messages`)
      // const res = await fetch(`http://localhost:8000/messages${userEmail}`)
      const json = await res.json()
      setMessages(json)
    } catch (err) {
        console.error(err)
    }
  }

  // useEffect(() => {
  //   if (AuthToken) {
  //     getData()
  //   }},[])

  console.log(messages)

  //Sort by date
  const sortedMessages = messages?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="App">
    {!authToken && <Auth/>}
    {authToken &&
      <>
      <ListHeader listName={'TalkAlot'} getData={getData}/>
      {sortedMessages?.map((message) => <ListItem key={message.id} message={message} getData={getData}/>)}
      </>}
    </div>
  )
}

export default App
