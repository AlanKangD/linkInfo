import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: process.env.DB_HOST || '125.241.251.235',
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME || 'private',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpassword',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool

