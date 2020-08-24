const connection = require('./connection')

printQuestionMarks = (num) => {
    let arr = []
    for (var i = 0; i < num; i++) {
        arr.push('?')
    }
    return arr.toString()
}

objToSql = (ob) => {
    let arr = []
    for (var key in ob) {
        var val = ob[key]
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof val === "string" && val.indexOf(' ') >= 0) {
                val = "'" + val + "'"
            }
            arr.push(key + "=" + val)
        }
    }
    return arr.toString()
}

const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    create: (table, cols, vals,cb) => {
        let queryString = "INSERT INTO " + table
        queryString += " ("
        queryString += cols.toString()
        queryString += ") "
        queryString += "VALUES ("
        queryString += printQuestionMarks(vals.length)
        queryString += ") "

        console.log(queryString)

        connection.query(queryString, vals, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    update: (table, objColVals, cond, cb) => {
        let queryString = "UPDATE " + table
        queryString += " SET "
        queryString += objToSql(objColVals)
        queryString += " WHERE "
        queryString += cond

        console.log(queryString)

        connection.query(queryString, (err, result) => {
            if (err) throw err
            cb(result)
        })
    },
    delete: (table, cond, cb) => {
        let queryString = "DELETE FROM " + table
        queryString += " WHERE "
        queryString += cond

        connection.query(queryString, (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm