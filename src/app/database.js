const { createPool } = require('mysql2')
const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = require('./config')
const { log } = require('@/utils')

const useDatabase = () => {
  const connection = createPool({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
  })

  const connectDatabase = async () => {
    connection.getConnection((err, connection) => {
      if (err) return log(`${err.message}`, 'red')
      log('database connected ~', 'green')
    })
  }

  const clearDatabase = async () => {
    const tables = ['users', 'blogs', 'files', 'projects']
    await Promise.all(tables.map(async table => {
      await connection.promise().execute(`DELETE FROM ${table}`)
    }))
  }

  const disconnectDatabase = async () => {
    connection.end((err) => {
      if (err) return log(`${err.message}`, 'red')
      log('database disconnected ~', 'yellow')
    })
  }

  return {
    connectDatabase,
    clearDatabase,
    disconnectDatabase,
    execute: connection.promise().execute.bind(connection.promise())
  }
}

module.exports = {
  useDatabase
}
