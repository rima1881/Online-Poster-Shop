import {Sequelize } from "sequelize"


//mariadb server info ****************************************************
const host = 'localhost'
const mariadbPort = 3306
const db = 'Pashmak'
const user = 'development'
const userPwd = 'test123'


const sequelize = new Sequelize(db,user,userPwd,{
    dialect: 'mariadb',
    host: host,
    port: mariadbPort,
    dialectOptions: {
        connectTimeout: 5000
    }
})

export default sequelize