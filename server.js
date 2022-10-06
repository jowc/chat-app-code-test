const path = require('path')
const express = require('express')


const app = express()

//set static folder
app.use(express.static(path.join(__dirname, 'public')))

const port = 3000 || process.env.port

app.listen(port, () => console.log(`server runing on port http://localhost:${port}`) )