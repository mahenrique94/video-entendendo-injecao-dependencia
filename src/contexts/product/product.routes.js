import { server } from '../../infrastructure/api/server.js'
import { productController } from './product.controller.js'

export const productRoutes = () => {
  server.get('/products', productController.list)
}
