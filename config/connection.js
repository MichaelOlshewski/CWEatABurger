const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MOlsh2017',
    database: 'burgers_db'
})

con.connect((err) => {
    if (err) {
        console.error(`There was an error connecting to ${con[4]}`, err.stack)
        return
    }
    console.log(`Connected with ID ${con.threadId}`)
})

module.exports = con