<template>
	<div  class="detailHeader">
		<div class="left" @click="goLogin"><i class="fa fa-user-o" aria-hidden="true"></i></div>
		<div class="center">商品详情</div>
		<div class="right"><i class="fa fa-search" aria-hidden="true"></i></div>
	</div>
</template>

<script>
	export default{
		name:'detailHeader',
		data(){
			return{
				name:'这里是header组件'
			}
		},
		methods:{
			goLogin(){
				this.$router.push({path:"/login"})
			}
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../styls/main.less");
	.detailHeader{
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
			.w(80);
			.h(44);
			color:#FFECED;
			font-weight: bolder;
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