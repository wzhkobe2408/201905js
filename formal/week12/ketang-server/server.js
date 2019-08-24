let express = require('express')
let bodyParser = require('body-parser')
let session = require('express-session')

let fs = require('fs')

// 使用 session：
// 1. express-session 中间件
// 2. 配置 express-session 中间件

let app = express()

app.use(express.static(__dirname))

app.use(bodyParser.json())

// CORS 跨域资源共享；
// CORS 是一种常用的跨域解决方案；这种跨域解决方案，需要目标域服务端配合才能实现；
// localhost:8081 访问 localhost:3001 的接口；此时 localhost:3001 是目标域，需要 localhost:3001 的服务端增加以下的响应头
app.use(function (req, res, next) {

  res.header('Access-Control-Allow-Origin', 'http://localhost:8081') // 设置允许跨过来的域

  res.header('Access-Control-Allow-Credentials', true) // 允许携带cookie

  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Request-With'); // 允许的头信息

  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS') // 允许的请求方式

  res.header('X-Powered-By', '3.2.1')

  // 当客户端检测到复杂请求，例如 post 发送 json 就是复杂请求；浏览器会先发送一次 options 请求，查看目标域的服务端对跨域的支持情况；例如目标域是否支持 post，是否允许跨域；如果不允许上面的这些头信息就都不会有；
  if (req.method.toUpperCase() === 'OPTIONS') {
    // 让 options 请求快速返回
    res.send(200)
  } else {
    next()
  }
})

// 配置 session
app.use(session({
  resave: true, // 保存 cookie
  saveUninitialized: true, // 保存未初始化的 session
  secret: 'abcdefg' // 签名
})) // 使用 session 中间件以后，在请求对象 req 上面会有一个 req.session 对象，我们可以通过这个对象访问 session


let sliders = require('./database/sliders')
app.get('/api/sliders', (req, res) => {
  res.send(sliders)
})

app.get('/api/lessons', (req, res) => {
  let {limit, offset, type} = req.query
  limit = +limit
  offset = +offset
  let data = JSON.parse(fs.readFileSync('./database/lessons.json', 'utf8'))
  data = data.filter((item) => +item.type === +type)

  let list = data.slice(offset, limit + offset)
  res.send({
    list
  })
})

let users = [
  {
    username: 'zs',
    password: '1234'
  }
] // 用户列表

// 注册
app.post('/api/reg', (req, res) => {
  let {username, password} = req.body
  let isExist = users.find(i => i.username === username)
  if (isExist) {
    res.send({
      code: 1,
      user: null,
      msg: '用户名已经被注册'
    })
  } else {
    users.push({
      username,
      password
    })
    res.send({
      code: 0,
      user: {
        username,
        password
      },
      msg: 'ok'
    })
  }
})

// 登录
app.post('/api/login', (req, res) => {
  // 登录：客户端把用户名和密码传递给服务端；服务端首先去数据库中查找是否有这样一个用户名，如果有再比对密码；如果密码正确就成功登录，登录成功以后，服务端会把用户的登录状态、用户其他信息存在 session 中
  let {username, password} = req.body
  let isExist = users.find(item => item.username === username)
  if (isExist) {
    if (isExist.password === password) {
      // 用户名和密码都匹配，说明用户信息有效
      req.session.user = isExist // 用户信息有效，我们把用户的信息存储到 session 中
      console.log(req.session.user)
      res.send({
        code: 0,
        user: isExist,
        msg: 'ok'
      })
    } else {
      res.send({
        code: 1,
        user: null,
        msg: '用户名或密码不正确'
      })
    }
  } else {
    res.send({
      code: -1,
      user: null,
      msg: '该用户名不存在'
    })
  }
})

// 查询用户登录状态
app.get('/api/validate', (req, res) => {
  // 判断登录状态就是判断 req.session.user 存在与否；如果前面登录过了，req.session.user 就是用户信息对象
  console.log(req.session.user)
  // session 是基于 cookie 的；session 在生成以后会把 session-id 保存在 cookie 中，当响应客户端时，会自动把 cookie 带给客户端，客户端发现响应中带有 cookie 会自动保存；
  // 而客户端再去请求的时候会带着 cookie 去请求，当服务端收到请求后，如果使用 session ，会自动从 cookie 中获取 session-id，然后根据 session-id 获取对应的信息
  if (req.session.user) {
    res.send({
      code: 0,
      user: req.session.user,
      msg: 'ok'
    })
  } else {
    res.send({
      code: -2,
      user: null,
      msg: '用户未登录'
    })
  }
})


app.listen(3001, () => console.log('port 3001 is on'))
