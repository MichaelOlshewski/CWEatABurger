const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const exphb = require('express-handlebars')

app.engine("handlebars", exphb({ defaultLayout: "main"}))
app.set("view engine", "handlebars")

const routes = require('./controllers/burgers_controller')

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})