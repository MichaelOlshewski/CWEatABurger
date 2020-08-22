const express = require('express')
const app = express()
const burger = require('../server')

app.get('/', (req, res) => {
    burger.selectAll((data) => {
        const burgerObj = {
            burger: data
        }
        console.log(burgerObj)
        res.render("index", burgerObj)
    })
})

app.post('/api/burgers', (req, res) => {
    burger.create(["name", "devour"], [req.body.name, req.body.devour], (result) => {
        res.json({ id: result.insertId})
    })
})

app.put('/api/burgers/:id', (req, res) => {
    const cond = "id = " + req.params.id
    console.log("Condition: ", cond)
    burger.update({
        devour: req.body.devour
    },
    cond,
    (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    }
    )
})

app.delete('/api/burgers/:id', (req, res) => {
    const cond = "id + " + req.params.id
    burger.delete(cond, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

module.exports = app