var mysql = require('mysql2/promise')
var db = mysql.createPool({
    connectionLimit: 10,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DB
})
db.getConnection((err,connection)=>{
    if(err){
        return console.log(err)
    }
    console.log(connection)
})
db.on('acquire', (c)=> {
    console.log(`Connection id is ${c.connectionId} and pool db is ${c._pool.config.connectionConfig.database}`)
})
db.on('connection', (c)=> {
    console.log(`Connection id is ${c}`)
})

module.exports = db