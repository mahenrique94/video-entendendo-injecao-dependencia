export class ProductService {
  constructor(repository) {
    this.repository = repository
  }

  list = async () => await this.repository.getAll()

  calculateTotal = async () => {
    const products = await this.repository.getAll()
    return products.reduce((total, product) => {
      return total += product.price
    }, 0)
  }

  getMostExpensive = async () => {
    let product = { price: 0 }
    const products = await this.repository.getAll()

    if (products.length > 0) {
      products.forEach(p => {
        if (p.price > product.price) {
          product = p
        }
      })
    }

    return product
  }
}
