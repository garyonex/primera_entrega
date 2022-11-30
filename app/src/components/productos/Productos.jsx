import React, { useEffect, useState } from 'react'
import { socket } from '../../App'

function Productos() {
  const [producto, setProducto] = useState('')
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const receive = (producto) => {
      setProductos(producto)
    }
    socket.on('server:productos', receive)
    console.log(productos)
    return () => {
      socket.off('server:productos', receive)
    }
  }, [productos])

  return (
    <div>
      <h1>PRODUCTOS</h1>
      {productos.map((producto) => (
        <div key={producto.id}>
          <div class='card' style={{ width: '18rem' }}>
            <img
              src={producto.thumbnail}
              class='card-img-top'
              alt={producto.title}
              style={{ width: '12rem' }}
            />
            <div class='card-body'>
              <p class='card-text text-capitalize '>
                Title: <b>{producto.title}</b> <br/>
                Precio: {producto.price}
              </p>
              <span>Stock: {producto.stock}</span>
            </div>
            <button className='btn btn-primary'>COMPRAR</button>
          </div>
         
        </div>
      ))}
    </div>
  )
}

export default Productos
