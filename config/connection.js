const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'qn0cquuabmqczee2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
    port: 3306,
    user: 'wlrd6d7r7ed7bz5a',
    password: 'o4sse9ksh8144q8y',
    database: 'yugh9s8qlcdw006f'
})

con.connect((err) => {
    if (err) {
        console.error(`There was an error connecting to ${con[4]}`, err.stack)
        return
    }
    console.log(`Connected with ID ${con.threadId}`)
})

module.exports = con
