<template>
	<div  class="details">
		<img :src="'https://images.weserv.nl/?url='+imgurl"> 
	</div>
</template>

<script>
	import Axios from 'axios';
	export default{
		name:'Details',
		data(){
			return{
				name:'这里是details组件',
				imgurl:''
			}
		},
		methods:{
		},
		created(){
			let img=this.$route.params.img;
			console.log(img)
			this.imgurl=img
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../styls/main.less");
	.details{
		.mt(94);
	}
</style>