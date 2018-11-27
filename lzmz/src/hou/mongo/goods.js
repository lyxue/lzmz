 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let goodsSchema=new Schema({
 	id:{type:Number,required:true},
 	name:{type:String,required:true},
 	brand:{type:String,required:true},
 	origin:{type:String,required:true},
 	face:{type:String,required:true},
 	productionDate:{type:String,required:true},
 	expirationDate:{type:String,required:true},
 	pack:{type:String,required:true},
 	evaluate:{type:String,required:true},
 	size:{type:String,required:true},
 	buynum:{type:String,required:true},
 	price:{type:String,required:true},
 	saleprice:{type:String,required:true},
 	desc:{type:String,required:true},
 	introduceurl:{type:Array,required:true},
 	producturl:{type:Array,required:true},
 	littleurl:{type:String,required:true}
 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let goods=mongoose.model('goods',goodsSchema);

module.exports=goods
//抛出数据模型






// {
//     "id" : 1,
//     "name" : "Beauty Rule美丽法则水感丝绒唇釉保湿持久唇彩口红6.5g",
//     "brand" : "美丽法则",
//     "origin" : "中国",
//     "face" : "油性肌肤",
//     "productionDate" : "详见商品包装",
//     "expirationDate" : "三年",
//     "pack" : "无盒塑封",
//     "evaluate" : "436",
//     "size" : "62g",
//     "buynum" : "1210",
//     "price" : "198.00",
//     "saleprice" : "99.00",
//     "desc" : "丝绒唇釉保湿持久唇彩",
//     "introduceurl" : "[http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c39ce71b71b5.jpg!wh600,http://img.lizi.com/lizi/store/554b07acf31ef04978652554/340531a585c27.jpg!wh600]",
//     "producturl" : "[http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22eefe3d2589e.jpg!wh300,http://img.lizi.com/lizi/store/554b07acf31ef04978652554/2e4d604c72a81.jpg!wh300]"
// }