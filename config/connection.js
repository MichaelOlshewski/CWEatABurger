const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'qn0cquuabmqczee2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'havu4sprheh8nc7c',
    password: 'ecu68q3lstyn6xja',
    database: 'kclx6u90ypoqbzw0'
})

connection.connect((err) => {
    if (err) {
        console.error(`There was an error connecting to ${connection[4]}`, err.stack)
        return
    }
    console.log(`Connected with ID ${connection.threadId}`)
})

module.exports = connection