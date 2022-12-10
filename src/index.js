import { server } from './infrastructure/api/server.js'
import { database } from './infrastructure/storage/database.js'

import { productRoutes } from './contexts/product/product.routes.js'

const start = async () => {
  productRoutes()
  
  await database.authenticate()
  await database.sync()
  
  server.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080')
    console.log('Para parar o servidor pressione CTRL+C')
  })
}

start()
