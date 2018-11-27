<template>
	<div class="renqipin">
		<p>{{name}}</p>
		<span>{{name1}}</span>
		<ul>
			<li v-for="(item,index) in renqilist">
				<a href="javascript:;">
					<img :src="'https://images.weserv.nl/?url='+item.picSmall">
					<h2>{{item.productTitle}}</h2>
					<p class="info">{{item.recommend}}</p>
					<div class="price">
						<span class="now">￥<em>{{item.proPrice}}</em></span>
						<span class="old">￥{{item.marketPrice}}</span>
						<span>已售出:{{item.salesCount}}</span>
						<span class="button" @click="goDetails(item.itemId,item.picSmall,item.proPrice,item.salesCount,item.productTitle)">加入购物车</span>
						<!-- <span class="button" @click="goDetails(item.itemId,item.productTitle,item.picSmall)">加入购物车</span> -->
						</div>
				</a>
				<div class="xianshi"></div> 
			</li>
		</ul>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import Axios from 'axios';
	import Vue from 'vue';
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);
	export default{
		name:'Renqipin',
		data(){
			return{
				name:'人气品',
				name1:'HOT PRODUCT',
				renqilist:[]
			}
		},
		methods:{
			getBannerData(){
				// Axios.get('/static/chana.json',{})  只是请求josn文件使用的句子
				let toast=Toast({
					message: '数据加载中!',
					iconClass: 'fa fa-spinner fa-spin',
					duration: -1           //-1代表数据加载完毕后会自动关闭加载图标
				});
				Axios.get('/app/newIndex/recItems?max=10&url=%2FnewIndex%2FrecItems&id=&type=HOT&offset=0',{})
				.then((res)=>{
					if(res.status==200){
						this.renqilist=res.data.model;
						toast.close()
					}
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			goDetails(id,imgUrl,price,salesCount,title){
				this.$router.push({name:'detailCont',params:{
					img:`${imgUrl}`,
					title:`${title}`,
					id:`${id}`,
					price:`${price}`,
					renshu:`${salesCount}`,
					title:`${title}`,
				}})
			}
		},
		created(){
			this.getBannerData()
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../../styls/main.less");
	.renqipin{
		.w(375);
		text-align: center;
		background:#F5F5F5;
		p{
			.fs(20);
			color:#333333;
			display: inline-block;
			font-weight:border;
			.padding(0,0,10,0);
		}
		span{
			.fs(10);
			color:#666666;
			display: inline-block;
		}
		ul{
			list-style:none;
			li{
				border-bottom:1px solid #E3E3E4;
				.padding(0,14,0,14);
				margin:0 auto;
				background:#FFFFFF;
				.w(355);
				.h(370);
				box-sizing: border-box;
				text-align:center;
				a{
					text-decoration:none;
					img{
						.w(250);
						.h(212);
						.padding(0,0,0,62);
					}
					h2{
						.fs(12);
						color:#222222;
					}
					p{
						.fs(12);
						color:#BBBBBB;
						text-align:center;
					}
					.price{
						.h(20);
						.now{
							color: #FF6666;
							.fs(13);
						}
						.old{
							text-decoration:line-through;
						}
						.button{
							.w(80);
							.h(25);
							text-align: center;
							.lh(25);
							border-radius: 30px;
							background: #FF666B;
							color: #FFFFFF;
							.margin(10,36,0,0);
						}
					}
				}
			}
		}
	}
</style>