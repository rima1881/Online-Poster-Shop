import { Sequelize , DataTypes } from 'sequelize'
import sequelize from '../utils/sequelize.mjs'

const CartItem = sequelize.define("cartItem" , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
})

export default CartItem