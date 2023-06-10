import {Sequelize } from "sequelize"

const sequelize = new Sequelize('Pashmak','development','test123',{
    dialect: 'mariadb',
    host: 'localhost',
    port: '3307',
    dialectOptions: {
        connectTimeout: 5000
    }
})

export default sequelize