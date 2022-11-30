import React from 'react'

function ProductoForm({ handleRegister, ...props }) {
  return (
    <div className='container'>
      <form onSubmit={handleRegister} className='row g-3'>
        <div>
          <input
            // type='text'
            id='title'
            value={props.title}
            name='title'
            placeholder='title'
            onChange={props.handleTitleChange}
            required
          />
        </div>
        <div>
          <input
            // type='number'
            id='price'
            value={props.price}
            name='price'
            placeholder='price'
            onChange={props.handlePriceChange}
            required
          />
        </div>
        <div>
          <input
            // type='number'
            id='stock'
            value={props.stock}
            name='stock'
            placeholder='stock'
            onChange={props.handleStockChange}
            required
          />
        </div>
        <div>
          <input
            // type='url'
            id='thumbnail'
            value={props.thumbnail}
            name='thumbnail'
            placeholder='thumbnail'
            onChange={props.handleThumbnailChange}
            required
          />
        </div>
        <button className='btn btn-primary mt-2'>CARGAR</button>
      </form>
    </div>
  )
}

export default ProductoForm
