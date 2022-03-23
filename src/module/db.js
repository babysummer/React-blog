// mongoose 连接
const mongoose = require('mongoose')
//连接相应数据库，在这里连接的是react_blog数据库
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/react_blog')

db.on('error', function (error) {
    console.log(error);
})

db.once('open', function (error) {
    console.log('数据库连接成功');
})

module.exports = db;