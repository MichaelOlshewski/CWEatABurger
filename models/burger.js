const orm = require('../config/orm')

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res)
        })
    },
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res)
        })
    },
    update: (objColVals, cond, cb) => {
        orm.update("burgers", objColVals, cond, (res) => {
            cb(res)
        })
    }
}

module.exports = burger