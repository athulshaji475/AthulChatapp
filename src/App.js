import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './component/ChatFeed'
import  './App.css'
import LoginForm from './component/LoginForm'
function App() {
let uname=localStorage.getItem("username")
let password=localStorage.getItem("password")
  if(!localStorage.getItem("username"))return <LoginForm/>
  
  return (
    
    <ChatEngine
        height="100vh"
        projectID="5e643cba-006e-450b-a108-b81878d8b7d4"
        userName={uname}
        userSecret={password}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App
