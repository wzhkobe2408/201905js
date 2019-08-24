let express = require('express')
let bodyParser = require('body-parser')
let fs = require('fs')

let app = express()

app.use(express.static(__dirname))

app.use(bodyParser.json())

let sliders = require('./database/sliders')
app.get('/api/sliders', (req, res) => {
  res.send(sliders)
})

app.get('/api/lessons', (req, res) => {
  let { limit, offset, type } = req.query
  limit = +limit
  offset = +offset
  let data = JSON.parse(fs.readFileSync('./database/lessons.json', 'utf8'))

  let list = data.slice(offset, limit + offset)
  res.send({
    list
  })
})

app.listen(3001, () => console.log('port 3001 is on'))
