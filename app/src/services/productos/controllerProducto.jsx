import axios from 'axios'
const baseURL = 'http://localhost:8080/api/productos'

const newProducto = (newObject) => {
  const request = axios.post(baseURL, newObject)
  return request.then((res) => res.data)
}

export default newProducto