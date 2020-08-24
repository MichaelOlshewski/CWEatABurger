const express = require('express')
const router = express.Router()
const burger = require('../models/burger.js')

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let burgerObj = {
            burgers: data
        }
        console.log(burgerObj)
        res.render("index", burgerObj)
    })
})

router.post('/api/burgers', (req, res) => {
    burger.create(["name", "devour"], [req.body.name, req.body.devoured], (result) => {
        res.json({ id: result.insertId})
    })
})

router.put('/api/burgers/:id', (req, res) => {
    let cond = "id = " + req.params.id
    console.log("condition: ", cond)
    burger.update({
        devoured: req.body.devoured
    }, cond, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

router.delete('/api/burgers/:id', (req, res) => {
    let cond = "id = " + req.params.id
    burger.delete(cond, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

module.exports = router