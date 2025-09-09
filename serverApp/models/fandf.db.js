const mysql = require('mysql')
const dbConfig = require('../config/fandf.dbConfig')


const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USERNAME,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
})

connection.connect((err)=>{
    if(err)throw err
    console.log('connected to db: ', dbConfig.DATABASE)
})

module.exports = connection;