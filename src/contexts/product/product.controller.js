import { ProductService } from './product.service.js'
import { productRepository } from './product.repository.js'

const service = new ProductService(productRepository)

export const productController = {
  list: async (_, res) => {
    return res.json({ data: await service.list() })
  }
}
