const express = require('express')
const router = express.Router()
const burger = require('../server.js')

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const burgerObj = {
            burger: data
        }
        console.log(burgerObj)
        res.render("index", burgerObj)
    })
})

router.post('/api/burgers', (req, res) => {
    burger.create(["name", "devour"], [req.body.name, req.body.devour], (result) => {
        res.json({ id: result.insertId})
    })
})

router.put('/api/burgers/:id', (req, res) => {
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

router.delete('/api/burgers/:id', (req, res) => {
    const cond = "id + " + req.params.id
    burger.delete(cond, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

module.exports = router