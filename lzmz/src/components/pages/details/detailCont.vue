<template>
	<div class="detailCont">
		<detailHeader></detailHeader>
		<slideDetail></slideDetail>
		<div class="pro_box">
			<div class="pro_price">
				<div class="pri_top">
					<div class="price">￥{{proData.saleprice}}</div>
					<div class="buynum"><span>{{proData.buynum}}</span>人已购买</div>
				</div>
				<div class="desc">{{proData.desc}}</div>
			</div>
			<div class="pro_param">
				<dl>
					<dt>
						<i class="fa fa-pause" aria-hidden="true"></i>
						商品参数
					</dt>
					<dd><label>商品名称：</label><span>{{proData.name}}</span></dd>
					<dd><label>所属品牌：</label><span>{{proData.brand}}</span></dd>
					<dd><label>产地：</label><span>{{proData.origin}}</span></dd>
					<dd><label>适用肤质：</label><span>{{proData.face}}</span></dd>
					<dd><label>生产日期：</label><span>{{proData.productionDate}}</span></dd>
					<dd><label>保质期：</label><span>{{proData.expirationDate}}</span></dd>
					<dd><label>包装方式：</label><span>{{proData.pack}}</span></dd>
				</dl>
			</div>	
			<div class="pro_eval">
				<dl>
					<dt>
						<i class="fa fa-pause" aria-hidden="true"></i>
						评价详情
						<span>345</span>
					</dt>
					<dd>
						<div class="user">
							<div>
								12*****43@qq.com
							</div>
							<div>
								<i class="fa fa-star" aria-hidden="true"></i>
								<i class="fa fa-star" aria-hidden="true"></i>
								<i class="fa fa-star" aria-hidden="true"></i>
								<i class="fa fa-star" aria-hidden="true"></i>
								<i class="fa fa-star" aria-hidden="true"></i>
							</div>
						</div>
						<p>很好用啊，泡沫绵绵的，洗的干净</p>
						<p>规格：无 无</p>
					</dd>					
				</dl>
			</div>
			<div class="pro_shop">
				<img src="../../../assets/shop.png">
			</div>
			<div class="pro_intd">
				<dl>
					<dt>
						<i class="fa fa-pause" aria-hidden="true"></i>
						商品介绍
					</dt>
					<dd  v-for="(item,index) in list" :key="index">
						<img :src="'https://images.weserv.nl/?url='+item">
					</dd>
				</dl>
			</div>					
		</div>
		<div class="buying">
			<div class="buying_l">￥{{proData.saleprice}}</div>
			<div class="buying_c">
				<div><i class="fa fa-commenting" aria-hidden="true"></i></div>
				<p>客服</p>
			</div>
			<div class="buying_r" @click="add(1)">
				加入购物车
			</div>
			<buyBtn :num="num"></buyBtn>
		</div>
		<moveTop></moveTop>
		
	</div>
</template>

<script type="text/javascript">
	//引入vue
	import  Vue from 'vue';
	//头部的部分
	import detailHeader from './detailHeader.vue';
	//引入滑动图部分
	import slideDetail from './slideDetail.vue';
	//回到顶部模块
	import moveTop from '../../commons/moveTop.vue';
	//购物袋
	import buyBtn from './buyBtn.vue';

	export default{
		name:'detailCont',
		components:{slideDetail,moveTop,buyBtn,detailHeader},
		data(){
			return {
				proData:[],
				list:[],
				num:0
			}
		},
		methods:{
			getData(){
				let productId = this.$qs.stringify({
				    id:1
				});
				this.$axios({
				    method: 'post',
				    url:'/api/goods/findById',
				    data:productId
				}).then((res)=>{
					this.list = res.data.data[0].introduceurl;
					this.proData = res.data.data[0];
				    console.log(res.data.data[0]);
				  				
				});
			},
			add(val){



				this.num+=val;
				let buyPro =  this.$qs.stringify({
					id:this.proData.id,
					title:this.proData.name,
					size:this.proData.size,
					price:this.proData.price,
					imgpath:this.proData.littleurl,
					  buynum:1
				});

				console.log(buyPro)
				this.$axios({
				    method: 'post',
				    url:'/api/buyCar/addCar',
				    data:buyPro
				})
				.then((docs)=>{
				    console.log(docs);
				  				
				});	




			}
		},
		created(){
			this.getData();
		}

	}

</script>

<style lang="less" scoped>
 @import url('../../../styls/main.less');
 	.detailCont{
		.pro_box{
 			background:#F5F5F5;
			.pro_price{
				background:#fff;
				.margin(0,0,10,0);
				.pri_top{
					display: flex;
					justify-content: space-between;
					.padding(0,10,0,10);
					.price{
						.fs(20);
						.h(46);
						.lh(46);
						color:#ff666b;
					}
					.buynum{
						.fs(12);
						color:#ccc;
						.lh(46);
						span{
							color:#ff666b;
							.fs(12);
						}
					}
				}
				.desc{
					.fs(12);
					.lh(40);
					.h(40);
					border-top:1px solid #ddd;
					color:#999;
					.padding(0,10,0,10);
				}
			}
			.pro_param{
				background:#fff;
				.margin(0,0,10,0);
				dl{
					.padding(0,0,20,0);
					color:#666;
					dt{
						.lh(40);
						.fs(15);
						font-weight: bold;
						.padding(0,10,0,10);
						i{
							color:#ff666b;
							.fs(15);
						}
					}
					dd{
						.padding(0,10,0,10);
						display: flex;
						justify-content: space-between;
						label{
							display: inline-block;
							text-align:right;
							.w(65);
							.margin(6,0,0,0);
						}
						span{
							white-space: wrap;
							.w(300);
							.fs(12);
							.margin(6,0,0,0);
						}
					}
				}
			}
			.pro_eval{
				background:#fff;
				.margin(0,0,10,0);
				dl{
					dt{
						.lh(40);
						.fs(15);
						font-weight: bold;
						.padding(0,10,0,10);
						i{
							color:#ff666b;
							.fs(15);
						}
					}
					dd{
						.padding(0,10,0,10);
						color:#666;
						.fs(12);
						.lh(28);
						.user{
							display: flex;
							justify-content: space-between;
							i{
								color:#ff666b;
							}
						}
					}
				}
			}
			.pro_shop{
				background:#fff;
				.margin(0,0,10,0);				
				img{
					display: block;
					width:100%;
					.h(116);
				}
			}
			.pro_intd{
				background:#fff;
				.margin(0,0,10,0);
				dl{
					dt{
						.lh(40);
						.fs(15);
						font-weight: bold;
						.padding(0,10,0,10);
						i{
							color:#ff666b;
							.fs(15);
						}
					}
					dd{
						.padding(0,0,100,0);
						img{
							display: block;
							width:100%;
						}
					}
				}
			}
	 	}
	 	.buying{
	 		position:fixed;
	 		display: flex;
	 		justify-content: space-between;
	 		bottom:0;
	 		left:0;
	 		right:0;
	 		background:#fff;
	 		.h(45);
	 		.buying_l{
	 			.padding(0,0,0,10);
	 			color:#ff666b;
	 			.lh(45);
	 			.fs(20);
	 			.w(200);
	 			.h(45);
	 		}
	 		.buying_c{
	 			.fs(20);
	 			.w(45);
	 			text-align: center;
	 			color:#ff666b;
	 			p{
	 				.fs(12);
	 				color:#666;
	 			}
	 		}
	 		.buying_r{
	 			.w(130);
	 			text-align:center;
	 			.h(45);
	 			color:#fff;
	 			.fs(20);
	 			background:#ff666b;
	 			.lh(45);
	 		}
	 	}
	}


</style>


