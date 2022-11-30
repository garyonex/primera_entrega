import './App.css'
import io from 'socket.io-client'
import NavBar from './components/navbar/NavBar'
import Productos from './components/productos/Productos'
import Message from './components/message/Message'
import AddProductos from './components/productos/AddProductos'
export const socket = io('http://localhost:8080')
function App() {
  return (
    <div className='App container'>
      {/* <NavBar /> */}
      <div className='row justify-content-md-center'>
        <div className='col'>
          <AddProductos />
        </div>
      </div>
      <div className='col-md-auto'>
        <Productos />
      </div>
      <div className='col-lg-2'>
        <Message />
      </div>
    </div>
  )
}

export default App
