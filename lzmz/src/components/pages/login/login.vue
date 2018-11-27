<template>
	<div class="login">
		<loginHeader></loginHeader>
		<input type="text"  placeholder="输入手机号/邮箱/用户名" id="uname"/>
		<input type="text"  placeholder="登录密码" id="pwd"/>
	</div>
</template>

<script>
	import loginHeader from './loginHeader.vue';
	
	export default{
		name:'login',
		components: {
			loginHeader
		},
		data(){
			return{
				name:'登录'
			}
		},
		methods:{
			
		}	
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../styls/main.less");
	.login{
		.w(375);
		height:650px;
		background:#FFFFFF;
	}
</style>