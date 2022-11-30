import fs from 'fs'
import path from 'path'
class Contenedor {
  constructor(filename) {
    this.filename = path.join(__dirname, '..', `/${filename}`)
  }

  save = async (product) => {
    try {
      if (fs.existsSync(this.filename)) {
        const productos = await this.getAll()
        const lastIdAdd = productos.reduce(
          (acc, item) => (item.id > acc ? (acc = item.id) : acc),
          0
        )

        const newProduct = {
          id: lastIdAdd + 1,
          ...product,
        }
        productos.push(newProduct)
        await fs.promises.writeFile(
          this.filename,
          JSON.stringify(productos, null, 2)
        )
        return productos
      } else {
        const newProduct = {
          id: 1,
          ...product,
        }
        await fs.promises.writeFile(
          this.filename,
          JSON.stringify([newProduct], null, 2)
        )
      }
    } catch (error) {
      console.log('Existe un error', error)
    }
  }
  getById = async (id) => {
    try {
      if(fs.existsSync(this.filename)) {
        const productos = await this.getAll()
        const producto = await productos.find(item => item.id === id)
        return producto
      }
    } catch (error) {
      console.log(error)
    }
  }
  deleteById = async (id) => {
    try {
      const productos = await this.getAll()
      const newProduct = productos.filter(item => item.id !== id)
      await fs.promises.writeFile(this.filename, JSON.stringify(newProduct, null, 2))
      return `producto ${id} eliminado`
    } catch (error) {
      console.log(error)
    }
  }
  deleteAll = async () => {
    try {
      await fs.promises.writeFile(this.filename, JSON.stringify([]))
    } catch (error) {
      console.log(error)
    }
  }
  updateById = async (id, body) => {
    try {
      const productos = await this.getAll()
      const productosPos = productos.findIndex( e => e.id === id)
      productos[productosPos] = {
        id: id,
        ...body
      }
      await fs.promises.writeFile(this.filename, JSON.stringify(productos, null, 2))
      return productos
    } catch (error) {
      console.log(error)
    }
  }
  getAll = async() => {
    try {
      const contenido = await fs.promises.readFile(this.filename, 'utf-8')
      const productos = JSON.parse(contenido)
      return productos
    } catch (error) {
      console.log(error)
    }
  }
}

export default Contenedor
