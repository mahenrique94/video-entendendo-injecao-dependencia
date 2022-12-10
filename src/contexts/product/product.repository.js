import { Product } from '../../infrastructure/storage/models/product.model.js'

export const productRepository = {
  getAll: () => Product.findAll()
}
