<template>
	<div class="homelist">
		<ul>
			<li v-for="(item,index) in Homelist" :key='index'>
				<img :src="'https://images.weserv.nl/?url='+item.image"> 
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import Axios from 'axios';
	export default{
		name:'Homelist',
		data(){
			return{
				Homelist:[]
			}
		},
		methods:{
			getBannerData(){
				Axios.get('/app/newIndex/index',{params:{_:new Date().getTime()}})
				.then((res)=>{
					if(res.status==200){
						this.Homelist=res.data.model.menus.list;
					}
				})
				.catch((err)=>{
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
	.homelist{
		.top(345);
		right:0px;
		left:0px;
		background:pink;
		.h(70);
		ul{
			li{
				display:inline-block;
				.padding(5px,0,0px,0px);
				.w(93);
				text-align:center;
				img{
					display:block;
					.w(73);
					.h(47);
					.padding(0,0,8px,30px);
				}
				span{
					display:block;
					.h(20);
					.fs(12);
				}
			}
		}
	}
</style>