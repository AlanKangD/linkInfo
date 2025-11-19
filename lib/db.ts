import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: '125.241.251.235',
  port: 3306,
  database: 'private',
  user: 'root',
  password: 'rootpassword',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool

