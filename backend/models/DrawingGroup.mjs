import { Sequelize , DataTypes } from 'sequelize'
import sequelize from '../utils/sequelize.mjs'

const DrawingGroup = sequelize.define("drawingGroup", {
    id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }

})

export default DrawingGroup