 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let buyCarSchema=new Schema({
 	id:{type:Number,required:true},
 	title:{type:String,required:true},
 	size:{type:String,required:true},
 	price:{type:String,required:true},
 	imgpath:{type:String,required:true},
 	buynum:{type:Number,require:true}
 })
 // 将schema 对象转化为数据模型  model
 //var Blog = mongoose.model('Blog', blogSchema);
 //var Blog = mongoose.model('数据模型的名字（集合名字）', 要转化schema 对象);
 let buyCars=mongoose.model('buyCars',buyCarSchema);

module.exports=buyCars
//抛出数据模型






