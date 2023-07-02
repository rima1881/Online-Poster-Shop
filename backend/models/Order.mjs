import { Sequelize , DataTypes } from 'sequelize'
import sequelize from '../utils/sequelize.mjs'

const Order = sequelize.define("order", {
    id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }

})

export default Order