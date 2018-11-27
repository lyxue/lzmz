const express=require('express');
const Router=express.Router();
//数据模型引入
const buyCar=require('../mongo/buyCar.js')


//添加购物车
/**
 * @api {post} /buyCar/addCar
 * @apiName addCar
 * @apiGroup buyCar
 *
 * @apiParam {String} title  商品名称
 * @apiParam {Number} id  商品编号
 * @apiParam {String} size 商品规格
 * @apiParam {String} price 商品价格
 * @apiParam {String} imgpath 图片地址
 * @apiParam {String} buynum 购买数量
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/addCar',(req,res)=>{
  // console.log(req,res)
// 1.接受数据
	
  let {id,title,size,price,imgpath,buynum}=req.body
  console.log(req.body)
 buyCar.insertMany({id,title,size,price,imgpath,buynum})
 .then((data)=>{
 	
 	res.send({err:0,msg:'插入成功',data:null})
 })
 .catch((err)=>{
 	console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
 })

})

module.exports=Router;