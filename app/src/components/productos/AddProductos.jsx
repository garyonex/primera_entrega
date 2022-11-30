import React, { useState } from 'react'
import newProducto from '../../services/productos/controllerProducto'
import ProductoForm from './ProductoForm'

function AddProductos() {
  const [addProductos, setAddProductos] = useState([])
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const productRegister = await newProducto({
        title,
        price,
        stock,
        thumbnail,
      })
      console.log(productRegister)
      setAddProductos(productRegister)
      setTitle('')
      setPrice('')
      setStock('')
      setThumbnail('')
    } catch (error) {
      console.log(`Error en registro de productos ${error}`)
    }
  }
  return (
    <div>
      <ProductoForm
        title={title}
        price={price}
        stock={stock}
        thumbnail={thumbnail}
        handleTitleChange={({ target }) => setTitle(target.value)}
        handlePriceChange={({ target }) => setPrice(target.value)}
        handleStockChange={({ target }) => setStock(target.value)}
        handleThumbnailChange={({ target }) => setThumbnail(target.value)}
        handleRegister={handleRegister}
      />
    </div>
  )
}

export default AddProductos
