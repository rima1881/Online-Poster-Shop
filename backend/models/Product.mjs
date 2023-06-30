import { Sequelize , DataTypes } from "sequelize";
import sequelize from "../utils/sequelize.mjs";

const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.CHAR(16),
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Product