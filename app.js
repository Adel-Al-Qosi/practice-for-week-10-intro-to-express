const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hellooooooo')
}).get('/status', (req, res) => {
    res.send('what up')
})

const port = 5000

app.listen(port, () => console.log(`listening to the port ${port}`))