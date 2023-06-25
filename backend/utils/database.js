import mariada from 'mariadb'

const pool = mariada.createPool({
    host: '198.251.70.184',
    database : 'Pashmak',
    user: 'development',
    password: 'test123',
    connectionLimit: 5
})


const connection = await pool.getConnection()

export { pool ,connection }