import Contenedor from './container/Contenedor'
const contenedorProductos = new Contenedor('productos.json')
export default (io) => {

  const productos = contenedorProductos.getAll()
  io.on('connection', async (socket) => {
    console.log(`New client ${socket.id}`)

    socket.on('client:chat', (data) => {
      console.log(data)
      // const chat = { data }
      socket.broadcast.emit('server:chat', {
        body: data,
        from: socket.id,
      })
    })
    socket.emit('server:productos', await productos)
    socket.on('client:product', async (data) => {
      await contenedorProductos.save(data)
      socket.broadcast.emit('server:productos', await productos)
    })
  })
}
