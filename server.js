const express = require('express')
const app = express()

const HTTP_PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('<h3>Nghi Phuong Huynh Pham - 101412203</h3>')
})

app.listen(HTTP_PORT, () => {
    console.log(`Express server HTTP listening on ${HTTP_PORT}`)
})