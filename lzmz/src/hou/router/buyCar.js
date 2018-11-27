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

   // let {id,title,size,price,imgpath,buynum}=req.body
   let {id}=req.body



	buyCar.find({id},function(err,docs){
	    // console.log(docs)
	    if(docs.length){
	    	// console.log(docs)
	    	let  num = docs[0].buynum+1
	    	//let buynum = {buynum:docs[0].buynum};
	    	console.log(num);
	    	let buynum = {buynum:num};
	    	console.log(buynum)
		// res.send({err:0,msg:'成功查询',data:docs})
	    	// console.log(docs[0].buynum);
	    	//buynum++;
			buyCar.updateOne({id},buynum)
			.then((data)=>{
				res.send({err:0,msg:'增加数量1',data:null})
			})
			.catch((err)=>{
				console.log(err)
				res.send({err:-1,msg:'增加不成功',data:null})
			})    	
	    }else{

	    	 let {id,title,size,price,imgpath,buynum}=req.body;
			 buyCar.insertMany({id,title,size,price,imgpath,buynum})
			 .then((data)=>{
			 	
			 	res.send({err:0,msg:'成功新增了购物车',data:null})
			 })
			 .catch((err)=>{
			 	console.log(err)
			    res.send({err:-1,msg:'新增购物车失败',data:null})
			 })    	
	    }
	})




})




//购物车商品生成在页面
Router.post('/findCar',(req,res)=>{
	// console.log(req,res);
	buyCar.find({},function(err,docs){
	    if(err){
	        console.log('err:',err);
	            return;
	    };
	    res.send({err:0,msg:'查询成功',data:docs});	
	})
})


module.exports=Router;