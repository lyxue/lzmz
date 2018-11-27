<template>
	<div class="baoshi">
		<Header></Header>
		<Nav></Nav>
		<ul class="items_list">
			<li v-for="(item,index) in BaoshiList" :key='index' @click="goDetails(item.id)">
				<img :src="'https://images.weserv.nl/?url='+item.pic">
				<div class="content">
					<h2>{{item.title}}</h2>
					<span class="sale-count gray">已售出：{{item.salesCount}}件</span>
					<span class="old gray">市场价:￥{{item.marketPrice}}</span>
					<span class="now">￥<em>{{item.price}}</em></span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import Header from '../../../commons/Header.vue';
	import Nav from '../../../commons/Nav.vue';
	import Axios from 'axios';
	export default{
		name:'Baoshi',
		components: {
			Header,Nav
		},
		data(){
			return{
				BaoshiList:[]
			}
		},
		methods:{
			getBaoshi(){
				Axios.get('/app/newIndex/getItemDetailList?max=10&url=%2FnewIndex%2FgetItemDetailList&id=5767c59de4b0edc8bf0af23a&type=ITEM&offset=0',{})
				.then((res)=>{
					this.BaoshiList=res.data.model.data
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			goDetails(id){
				this.$router.push({path:`/details/${id}`})
			}
		},
		created(){
			this.getBaoshi()
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../../styls/main.less");
	.baoshi{
		.mt(94);
		ul{
			list-style: none;
			background:	#F5F5F5;
			li{
				.margin(8,8,0,8);
				.w(359);
				.h(100);
				background:#FFFFFF;
				border:1px solid #EDEDED;
				img{
					.w(100);
					.h(100);
					float:left;
				}
				h2{
					.w(250);
					.h(30);
					.fs(12);
					.padding(5,5,0,0);
					float:right;
					text-align:left;
				}
				.sale-count{
					.fs(12);
					.h(15);
					color:#999999;
				}
				.old{
					.fs(12);
					.h(15);
					color:#999999;
					.padding(0,75,0,0);
				}
				.now{
					.fs(12);
					display:block;
					.padding(0,210,0,0);
					color:#FD767B;
				}
			}	
		}
	}
</style>