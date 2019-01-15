const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welome to this test site very cool huh'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))