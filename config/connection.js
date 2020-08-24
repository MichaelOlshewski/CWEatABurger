const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '199.188.201.216',
    port: 3306,
    user: 'michypcv',
    password: '#MOlsh@2017',
    database: 'michypcv_burgers'
})

connection.connect((err) => {
    if (err) {
        console.error(`There was an error connecting to ${connection[4]}`, err.stack)
        return
    }
    console.log(`Connected with ID ${connection.threadId}`)
})

module.exports = connection