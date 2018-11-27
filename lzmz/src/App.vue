<template>
  <div id="app">
			<router-view></router-view>
			<!-- <detailCont></detailCont> -->
		<!-- 	<Footer></Footer> -->
  </div>
</template>

<script type="text/javascript">
//引入底部模块
import Footer from './components/commons/Footer.vue'
//详情页内容
import detailCont from './components/pages/details/detailCont.vue'
//购物车
import buyCar from './components/pages/details/buyCar.vue'
export default {
  name: 'App',
  components: {
   Footer,detailCont,buyCar
  },
	data(){
		return{

		}
	}
}
</script>
<style>
</style>
