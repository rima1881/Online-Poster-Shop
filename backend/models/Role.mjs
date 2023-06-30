import { Sequelize , DataTypes } from "sequelize";
import sequelize from "../utils/sequelize.mjs";

const Role = sequelize.define("role", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING(32),
        allowNull : false,
        unique : true
    }
})

export default Role