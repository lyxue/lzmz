// 引入模块
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// 链接数据库
const db = require('./mongo/Connect.js');

app.use(bodyParser.urlencoded({ extended:false }));



// 路由
const goodsRouter = require('./router/goods.js');
app.use('/goods',goodsRouter);


const buyCarRouter = require('./router/buyCar.js');
app.use('/buyCar',buyCarRouter);



// 监听
app.listen(3000,()=>{
	console.log('server start in port' + 3000);
});