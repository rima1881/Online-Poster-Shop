import { Sequelize , DataTypes } from 'sequelize'
import sequelize from '../utils/sequelize.mjs'

const Cart = sequelize.define("cart" , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

export default Cart