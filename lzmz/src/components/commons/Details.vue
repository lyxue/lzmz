<template>
	<div  class="details">
		{{name}}
	</div>
</template>

<script>
	import Axios from 'axios';
	export default{
		name:'Details',
		data(){
			return{
				name:'这里是details组件'
			}
		},
		methods:{
		},
		created(){
			let id=this.$route.params.id;
			console.log(id)
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../styls/main.less");
	.details{
		.mt(94);
	}
</style>