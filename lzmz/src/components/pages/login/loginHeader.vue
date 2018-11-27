<template>
	<div class="loginHeader"> 
		<div class="left" @click="goBack"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
		<div class="center">登录</div>
		<div class="right" @click="goBack"><i class="fa fa-university" aria-hidden="true"></i></div>
	</div>
</template>

<script>
	export default{
		name:'loginHeader',
		data(){
			return{
				name:'这里是header组件'
			}
		},
		methods:{
			goBack(){
				this.$router.push({path:"/Lizi"})
			}
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../styls/main.less");
	.loginHeader{
		position:fixed;
		top:0px;
		right:0px;
		left:0px;
		z-index:9999999;
		background: #FF666B;
		justify-content:space-between;  
		.lh(10);
		.h(44);
		.center{
			.fs(18);
			.w(287);
			.h(44);
			color:#FFECED;
			display: inline-block;
			.lh(44);
			text-align:center;
		}
		.left{
			float:left;
			.w(44);
			.h(44);
			display: inline-block;
			.fs(18);
			color:#FFECED;
			.lh(44);
			text-align:center;
		}
		.right{
			float:right;
			.w(44);
			.h(44);
			display: inline-block;
			.fs(18);
			color:#FFECED;
			.lh(44);
			text-align:center;
		}
	}
</style>