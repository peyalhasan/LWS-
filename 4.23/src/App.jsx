import { useState } from "react"
import ChatRoom from "./Components/ChatRoom"
import Form from "./Components/Form"
import SaveButton from "./Components/SaveButton"
import StatusBar from "./Components/StatusBar"
import Welcome from "./Components/Welcome"

function App() {

  return (
    <>
      <StatusBar />
      <SaveButton />
      <hr />
      <Form />
      <br />
      <br />
      <ChatBot  />
    </>
  )
}

export default App

function ChatBot() {
  const [roomId, setRoomId] = useState("general");

  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}
