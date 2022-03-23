// 创建服务
const express = require('express')
// 接收POST数据
const bodyParser = require('body-parser')
// const db = require('./src/module/db')
const app = express()

app.use(bodyParser.json())

app.get('/', async (erq, res) => {
    res.send('ok')
})

app.listen(3000, () => {
    console.log("node监听3001端口成功");
})
