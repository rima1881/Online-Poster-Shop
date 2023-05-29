import { Sequelize , DataTypes } from "sequelize";
import sequelize from "../utils/sequelize.mjs";

const User = sequelize.define("user", {
    id: {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    email: {
        type : DataTypes.STRING(40),
        allowNull : false,
        unique : true
    },
    pwd: {
        type : DataTypes.CHAR(64),
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    pic: {
        type: DataTypes.CHAR(32),
        allowNull: true
    },
    addr1: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    addr2: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    post: {
        type: DataTypes.CHAR(10),
        allowNull: true
    }

})

export default User