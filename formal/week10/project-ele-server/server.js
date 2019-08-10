let express = require('express')
let bodyParser = require('body-parser')
let fs = require('fs')

let dataPath = __dirname + '/database/data.json'
let jdb = (path = dataPath) => JSON.parse(fs.readFileSync(path, 'utf8'))

let app = express()

app.use(express.static(__dirname + '/static'))
app.use(bodyParser.json())

app.post('/api/login', (req, res) => {
  let { uname, pwd } = req.body
  if (uname && pwd) {
    res.setHeader('set-cookie', 'login_time=' + Date.now())
    res.send({
      code: 0,
      data: {
        token: `qwerty${uname}jwk${pwd}tyt`
      },
      msg: 'ok'
    })
  } else {
    res.send({
      code: -1,
      data: null,
      msg: '用户名或密码有误'
    })
  }
})

app.get('/api/user_list', (req, res) => {
  let obj = {
    code: 0,
    data: {},
    msg: 'ok'
  }
    // 分页的参数：默认 第一页，默认一页10条
  let { page = 1, limit = 10 } = req.query


  console.log(req.query)
  // 分页起点
  let start = (page - 1) * limit

  let end = page * limit - 1
  let con = jdb()
  let list = con.filter((item, index) => (index >= start && index <= end))
  obj.data = {
    list,
    total: con.length,
    page,
    limit
  }

  res.send(obj)
})


app.listen(8008, () => console.log('port 8008 is on'))
