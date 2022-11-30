import React, { useEffect, useState } from 'react'
import { socket } from '../../App'

function Message() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const dateNow = () => {
    const now = new Date()
    return `${now.getHours()}: ${now.getMinutes()}`
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    // console.log(message)
    socket.emit('client:chat', message)
    const newMessage = {
      body: message,
      from: 'Me',
      date: dateNow(),
    }
    setMessages([...messages, newMessage])
    setMessage('')
  }
  useEffect(() => {
    const receiveMessage = (message) => {
      setMessages([message, ...messages])
    }
    socket.on('server:chat', receiveMessage)
    return () => {
      socket.off('server:chat', receiveMessage)
    }
  }, [messages])
  return (
    <div>
      <h1>Chat</h1>
      <form action='' onSubmit={handlesubmit}>
        <input
          type='text'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Enviar</button>
      </form>

      {messages.map((message, index) => (
        <div key={index}>
          <div className=' card card-body rounded-0 mb-2 animate__bounceIn'>
            <div className='list-group chat'>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1 usuario'>{message.from}</h5>
                <small> Enviado el: {message.date}</small>
                <button className='btn btn-danger'>Eliminar</button>
              </div>
              <p className='mb-1'>{message.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Message
