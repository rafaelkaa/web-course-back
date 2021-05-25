const express = require('express')
const personRouter = require('./routes/person.routes')
const petRouter = require('./routes/pet.routes')
const port = 3000;

const app = express()

app.use(express.json())
app.use('/', personRouter)
app.use('/', petRouter)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})