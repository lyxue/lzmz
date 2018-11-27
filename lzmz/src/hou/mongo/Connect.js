// 引入模块
const mongoose = require('mongoose');
// 要加上数据库的名字
mongoose.connect('mongodb://127.0.0.1:27017/lzmz',{ useNewUrlParser: true });
let  db = mongoose.connection;

// 实例化链接对象
db.on("error",function(error){
	console.log("Database connection failure:" + error);
})

db.on("open",function(){
	console.log("数据路连接成功");
})

db.on('disconnected',function(){
	console.log('数据库连接断开');
})
