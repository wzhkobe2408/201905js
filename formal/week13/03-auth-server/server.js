let express = require('express')
let bodyParser = require('body-parser')
let expressSession = require('express-session')

let fs = require('fs')

let app = express()

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())

app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: 'mabin'
}))

let dbpool = JSON.parse(fs.readFileSync('./data/user.json', 'utf8'))
// console.log(Array.isArray(dbpool))

app.post('/api/login', (req, res) => {
  let { username, password } = req.body
  let isUser = dbpool.find(i => i.username === username)
  if (isUser) {
    req.session.user = isUser
    res.send({
      code: 0,
      data: {
        token: 'abcdefg'
      },
      msg: 'ok'
    })
  } else {
    res.send({
      code: -1,
      data: {},
      msg: '用户名或者密码错误'
    })
  }
})

let authes = JSON.parse(fs.readFileSync('./data/auth.json', 'utf8'))
app.get('/api/getAuth', (req, res) => {
  let user = req.session.user
  let userId = dbpool.find(item => item.username === user.username)
  let userAuth = authes.find(i => +i.id === +userId.id)
  console.log(userAuth)
  res.send({
    code: 0,
    data: userAuth.list,
    msg: 'ok'
  })
})


app.listen(8008, () => console.log('8008 is on'))
