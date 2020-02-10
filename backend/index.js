const path = require('path')

const express = require('express')
const { Liquid } = require('liquidjs')
const internalIp = require('internal-ip')
const instant = require('instant')

const port = 8887
const engine = new Liquid()
const app = express()
const ipv4address = internalIp.v4.sync()

const frontendDir = path.resolve(__dirname, '..', 'frontend')

app.engine('liquid', engine.express())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'liquid')

app.use(instant(frontendDir))

app.get('/', (req, res) => res.render('index'))
app.listen(port, ipv4address, () => console.log(`Server listening on http://${ipv4address}:${port}`))
