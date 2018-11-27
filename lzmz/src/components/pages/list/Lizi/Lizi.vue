<template>
	<div class="lizi">
		<Header></Header>
		<Nav></Nav>
		<Banner></Banner>
		<Homelist></Homelist>
		<PopularActivity></PopularActivity>
		<Renqipin></Renqipin>
	</div>
</template>

<script>
	import Header from '../../../commons/Header.vue';
	import Nav from '../../../commons/Nav.vue';
	import Banner from './Banner.vue';
	import Homelist from './Homelist.vue';
	import PopularActivity from './PopularActivity.vue';
	import Renqipin from './Renqipin.vue';
	export default{
		name:'Lizi',
		components: {
			Header,Nav,Banner,Homelist,PopularActivity,Renqipin
		},
		data(){
			return{
			}
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../../styls/main.less");
	.lizi{
		.mt(84);
	}
</style>