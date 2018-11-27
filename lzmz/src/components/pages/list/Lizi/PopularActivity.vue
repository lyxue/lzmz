<template>
	<div class="PopularActivity">
		<p>{{name}}</p>
		<span>{{name1}}</span>
		<div v-for="item in palist">
			<img :src="'https://images.weserv.nl/?url='+item.picUrl"> 
		</div>
	</div>
</template>

<script>
	import Axios from 'axios';
	export default{
		name:'PopularActivity',
		data(){
			return{
				name:'热门活动',
				name1:'POPULAR ACTIVITY',
				palist:[]
			}
		},
		methods:{
			getBannerData(){
				Axios.get('/app/newIndex/index?_=1542788328603',{})
				.then((res)=>{
					if(res.status==200){
						this.palist=res.data.model.sourceAdv.model;
					}
				})
				.catch((err)=>{
					console.log(err)
				})
			}
		},
		created(){
			this.getBannerData()
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../../styls/main.less");
	.PopularActivity{
		.w(375);
		background:#F5F5F5;
		p{
			.fs(20);
			color:#333333;
			display: inline-block;
			font-weight:border;
		}
		span{
			.fs(10);
			color:#666666;
			display: inline-block;
		}
		div{
			img{
				.w(353);
				.h(252);
			}
		}
	}
</style>