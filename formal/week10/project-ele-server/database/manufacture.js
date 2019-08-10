let fs = require('fs')
let ary = []

for (let i = 1; i <= 1000; i++) {
  let obj = {
    id: i,
    name: '王小虎' + i,
    age: Math.floor(Math.random() * 50)
  }
  ary.push(obj)
}

fs.writeFileSync('./data.json', JSON.stringify(ary), 'utf8')
