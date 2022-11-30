import app from './app'
import { Server as websocket } from 'socket.io'
import http from 'http'
import socket from './socket'

const server = http.createServer(app)
const PORT = 8080
const httpServer = server.listen(PORT)
const io = new websocket(httpServer, {
  cors: {
    origin: '*',
  },
})
console.log(`Server on port ${PORT}`)
socket(io)
