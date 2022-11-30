import express from 'express'
import multer from 'multer'
import productosRoutes from './routes/productos.routes'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})
app.use('/api/productos', productosRoutes)
export default app
