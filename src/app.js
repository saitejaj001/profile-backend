const express = require('express')
const router = require('./routes')
const PORT = process.env["PORT"] || 8080
const app = express()

app.use(express.json())

app.use('/api', router)

app.listen(PORT, () =>{
    console.log("Listening to ", PORT)
})
