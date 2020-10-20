const express = require("express")
const app = express()
const port = 3010
const routes = require("./routes")
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extend: true }))

app.use(express.static('public'))
app.use(routes)
app.engine('handlebars', exhbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

app.listen(port, () => {
  console.log(`Here is Listening on localhost http://localhost:${port}`)
})
