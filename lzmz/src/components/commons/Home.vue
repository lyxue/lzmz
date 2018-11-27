<template>
	<div class="home">
		{{name}}
	</div>
</template>

<script>
	export default{
		name:'Home',
		components: {
		},
		data(){
			return{
				name:'这里是home组件'
			}
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../styls/main.less");
	.home{
		.mt(91);
		.w(375);
		.h(1000);
		background:yellow;
	}
</style>