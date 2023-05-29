import { Sequelize , DataTypes } from "sequelize";
import sequelize from "../utils/sequelize.mjs";

const Drawing = sequelize.define("drawing", {
    id: {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    url: {
        type: DataTypes.CHAR(32),
        allowNull: false,
        unique: true
    },
    resolution: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },
    isDefault: {
        type : DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

export default Drawing