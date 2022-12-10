import { ProductService } from './product.service.js'

describe('Tests for the product service', () => {
  it('Deve retornar 30 quando o valor de cada produto for 10', async () => {
    const service = new ProductService({
      getAll: async () => [{
        name: 'First',
        describe: 'First',
        price: 10
      }, {
        name: 'Second',
        describe: 'Second',
        price: 10
      },
      {
        name: 'Third',
        describe: 'Third',
        price: 10
      }]
    })
    expect(await service.calculateTotal()).toEqual(30)
  })

  it('Deve retornar o segundo produto quando ele for o mais caro de todos', async () => {
    const service = new ProductService({
      getAll: async () => [{
        name: 'First',
        describe: 'First',
        price: 11
      }, {
        name: 'Second',
        describe: 'Second',
        price: 234
      },
      {
        name: 'Third',
        describe: 'Third',
        price: 77
      }]
    })

    const result = await service.getMostExpensive()

    expect(result.price).toEqual(234)
    expect(result.name).toEqual('Second')
  })
})
