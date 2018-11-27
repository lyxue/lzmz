<template>
	<div class="buyCar">
		<div class="buyCar_contain">
			<div class="shop">
				<div class="shop_l">
					<i class="fa fa-check-circle-o" aria-hidden="true"></i> 
				</div>
				<p>丽子自营</p>
				<div class="shop_r">
					<i class="fa fa-commenting" aria-hidden="true"></i>
				</div>
			</div>
			<div class="shop_list">
				<div class="list_Cont">
					<div class="list_l">
						<i class="fa fa-check-circle-o" aria-hidden="true"></i> 
						<img src="">
					</div>
					<div class="list_c">
						<p class="title">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
						<p class="size">规格：<span>11111</span></p>
						<p class="price">￥69.00</p>
					</div>
					<div class="list_r">
						<div>
							<i class="fa fa-trash-o" aria-hidden="true"></i>
						</div>
						<div class="numbox">
							<span class="sub">-</span>
							<span class="num">1</span>
							<span class="add">+</span>
						</div>
					</div>		
				</div>
			</div>
			<div class="total">
				<div class="total_l">
					<i class="fa fa-check-circle-o" aria-hidden="true"></i>
				</div>
				<div class="total_c">
					<p>共有<span>0</span>件商品</p>
					<h5>总计：<span>￥0.00</span></h5>
				</div>
				<div class="total_r">
					去结算
				</div>
			</div>			
		</div>
	</div>
</template>

<script type="text/javascript">


	export default{
		name:'buyCar',
		data(){
			return {

			}
		},
		methods:{

		},
		created(){

		}

		

	}

</script>

<style lang="less" scoped>
 @import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
 @import url('../../../styls/main.less');

 	.buyCar{
 		.padding(10,10,20,10);
 		background:#fff;
 		.buyCar_contain{
	 		background: #fff;
	 		border:1px solid #ddd;
	 		.shop{
	 			display: flex;
	 			justify-content: space-between;
	 			.padding(8,10,8,10);
	 			.shop_l{
	 				color:#ddd;
	 				.fs(18);
	 				.lh(30);
	 			}
	 			p{
	 				.w(280);
	 				.lh(30);
	 				.h(30);
	 				.fs(14);
	 			}
	 			.shop_r{
	 				color:#ff666b;
	 				.fs(18);
	 				.lh(30);
	 			}
	 		}
	 		.shop_list{
	 			.list_Cont{
		 			.padding(8,10,8,10);
		 			display: flex;
		 			justify-content:space-between;
		 			.list_l{
		 				display: flex;
		 				justify-content: flex-start;
		 				i{
			 				.fs(18);
			 				color:#ddd;
			 				.padding(0,5,0,0);
			 				.lh(74);		 					
		 				}
		 				img{
		 					.w(74);
		 					.h(74);
		 					margin-right:5px;
		 					border:none;
		 				}
		 			}	
		 			.list_c{
		 				.w(200);
		 				.title{
		 					.fs(14);
		 					color:#222;
		 					.lh(18);
		 				}
		 				.size{
		 					.fs(12);
		 					color:#999;
		 					.lh(18);
		 				}
		 				.price{
		 					.fs(10);
		 					color:#ff666b;
		 					.lh(18);
		 				}
		 			} 	
		 			.list_r{
	 					.h(20);
	 					.w(20);	
	 					position:relative;
		 				i{
		 					.fs(16);
		 					.lh(20);
		 					
		 				}
		 				.numbox{
		 					position:absolute;
		 					z-index: 99;
		 					.w(70);
		 					top:40px;
		 					right:-10px;
		 					span{
		 						border:1px solid #dcdcdc;
		 						display: inline-block;
		 						.w(20);
		 						.h(20);
		 						.fs(12);
		 						text-align: center;
		 						background: #F5F5F5;
		 					}
		 					.num{
		 						background:#fff;
		 					}
		 				}
		 			}			
	 			}
	 		}
	 		.total{
	 			display: flex;
	 			justify-content: space-between;
	 			position:fixed;
	 			right:0;
	 			left:0;
	 			bottom:0;
	 			.h(45)
	 		}
	 		.total_l{
	 			.h(45);
	 			.w(45);
	 			text-align: center;
	 			.lh(45);
	 			.fs(18);
	 			color:#ddd;
	 		}
	 		.total_c{
	 			.lh(22);
	 			.fs(14);
	 			.w(220);
	 			text-align: left;
	 		}
	 		.total_r{
	 			.w(100);
	 			.lh(45);
	 			.fs(18);
	 			text-align: center;
	 			color:#fff;
	 			background:#ff666b;
	 		}
	 	} 			
	}



</style>