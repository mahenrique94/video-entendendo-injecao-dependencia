import { Product } from '../../../infrastructure/storage/models/product.model.js'

(async () => {
  await Product.destroy({
    where: {},
    truncate:  true
  })
  
  await Product.create({
    name: 'My first product',
    description: 'My first product to test the api'
  })
  await Product.create({
    name: 'My second product',
    description: 'My second product to test the api'
  })
  await Product.create({
    name: 'My third product',
    description: 'My third product to test the api'
  })  
})()
