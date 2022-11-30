import Contenedor from '../container/Contenedor'

const contenedorProductos = new Contenedor('productos.json')
export const todosProductos = async (req, res) => {
  const result = await contenedorProductos.getAll()
  res.json({ message: result })
}

export const saveProductos = async (req, res) => {
  const { body } = req
  const result = await contenedorProductos.save(body)
  res.json({ message: result })
}

export const buscarId = async (req, res) => {
  const id = req.params.id
  const numeroId = Number(id)
  const result = await contenedorProductos.getById(numeroId)
  res.json({ message: result })
}

export const eliminarId = async (req, res) => {
  const { id } = req.params
  const numeroId = Number(id)
  const result = await contenedorProductos.deleteById(numeroId)
  res.json({ message: result })
}

export const eliminarTodo = async (req, res) => {
  const result = await contenedorProductos.deleteAll()
  res.json({ message: result })
}

export const modificarId = async (req, res) => {
  const { id } = req.params
  const numeroId = Number(id)
  const { body } = req
  console.log(body)
  const result = await contenedorProductos.updateById(numeroId, body)
  res.json({ message: result })
}
