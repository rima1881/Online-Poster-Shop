import { Sequelize , DataTypes } from "sequelize";
import sequelize from "../utils/sequelize.mjs";


const UserRole = sequelize.define("userRole" , {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    }
})

export default UserRole