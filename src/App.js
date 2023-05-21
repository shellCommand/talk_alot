import ListHeader from './components/ListHeader'
import { useEffect } from 'react'

const App = () => {

  const getData = async () => {
    try {
      const res = await fetch(`http://localhost:8000/messages`)
      // const res = await fetch(`http://localhost:8000/messages${userEmail}`)
      const json = await res.json()
      console.log(json)
    } catch (err) {
        console.error(err)
    }
  }

  useEffect(() => getData, [])

  return (
    <div className="App">
      <ListHeader listName={'🥸 TalkAlot'} />
    </div>
  )
}

export default App
