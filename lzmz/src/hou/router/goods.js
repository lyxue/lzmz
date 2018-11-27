const express=require('express');
const Router=express.Router();
//数据模型引入
const Goods=require('../mongo/goods.js')



// 通过id查询商品
/**
 * @api {post} /goods/findById/ findById
 * @apiName findById
 * @apiGroup goods
 *
 * @apiParam {String} id  要查询的商品的主键id
 *
 * @apiSuccess {Number} err 错误码 0：ok -1 失败
 * @apiSuccess {String} msg  结果信息
 * @apiSuccess {String} data  返回数据
 */
Router.post('/findById', (req, res)=>{
  // let id = mongoose.Types.ObjectId(req.body.id)  
console.log(req.body.id)
  Goods.find({"id":req.body.id},function(err,docs){

        // console.log(docs);
        res.send({err:0,msg:'成功查询',data:docs})
    })
})



module.exports=Router;