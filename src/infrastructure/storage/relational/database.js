import { Sequelize } from 'sequelize'

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
})

export { database }
