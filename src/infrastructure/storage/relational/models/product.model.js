import { DataTypes } from 'sequelize'
import { database } from '../database.js'

const Product = database.define('Product', {
  name: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

export { Product }
