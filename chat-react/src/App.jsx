import { useState } from "react"
import { Header } from "./components/Header"
import { Message } from "./components/Message"
import { MessageBox } from "./components/MessageBox"
import { MessageInput } from "./components/MessageInput"

function App() {

  const [msgList, setMsgList] = useState([
    {
      text: "Tive uma ideia incrível para um projeto! 😍",
      origin:"Cecilia",
      time:"11:30"
    },
    {
      text: "Sério?",
      origin:"Você",
      time:"11:37"
    }
  ])

  function addMessage(messageComponent) {
    setMsgList([...msgList, messageComponent])
  }

  return (
    <div className="container">
      <Header />
      <MessageBox messagesList={msgList} />
      <MessageInput addMessage={addMessage}/>
    </div>
  )
}

export default App
