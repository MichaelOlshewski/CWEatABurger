"use strict"

const con = require('./connection')

printQuestionMarks = () => {
    const arr = []

    for (let i = 0; i < Number; i++) {
        arr.push('?')
    }

    return arr.toString()
}

objToSql = (ob) => {
    const arr = []

    for (const key in ob) {
        const arr = []
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(' ') >= 0) {
                value = "'" + value + "'"
            }
            arr.push(key + "=" + value)
        }
    }

    return arr.toString()
}

const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = 'SELECT * FROM ' + tableInput + ";"
        con.query(queryString, (err, res) => {
            if (err) throw err
            cb(res)
        })
    },
    create: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ")"
        console.log(queryString)

        con.query(queryString, vals, (err, res) => {
            if (err) throw err
            cb(res)
        })
    },
    update: (table, objColVals, cond, cb) => {
        let queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + cond
        console.log(queryString)
        con.query(queryString, (err, res) => {
            if (err) throw err
            cb(res)
        })
    },
    delete: (table, cond, cb) => {
        let queryString = "DELETE FROM " + table + " WHERE " + cond
        console.log(queryString)
        con.query(queryString, (err, res) => {
            if (err) throw err
            cb(res)
        })
    }
}

module.exports = orm