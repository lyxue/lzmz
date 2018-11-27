<template>
	<div class="banner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in bannerList" :key='index'>
							<img :src="'https://images.weserv.nl/?url='+item.image"> 
					</div>
			</div>
			<div class="swiper-pagination"></div>  <!-- 如果需要分页器 -->
		</div>
	</div>
</template>
<script>
	import Axios from 'axios';
	import Swiper from 'swiper';    // 引入轮播图的插件
	import Vue from "vue";	        //vue属于实例对象，需要先引入
	export default{                 //前端抛出    组件配置 data prop methods 生命周期
		name:'Banner',              //抛出一个名字   代表组件的名字
		data(){
			return {
				bannerList:[]
			}
		},
		methods:{
				getBannerData(){
						Axios.get('/app/newIndex/index?_=1542788328603',{})
						.then((res)=>{
							if(res.status==200){
								this.bannerList=res.data.model.banners.list;
									Vue.nextTick(()=>{     //此时才会出现图片可以滑动的效果
										this.initSwiper()
								  })
							}
						})
						.catch((err)=>{
						})
				},
				initSwiper(){
					var mySwiper = new Swiper ('.swiper-container', {
							loop: true, 		// 循环模式选项
							pagination: {  		//分页器
								el: '.swiper-pagination',
								dynamicBullets: true,
							}
							})  
				  }
		},
		mounted(){
			 this.initSwiper()     
		},
		created(){
			this.getBannerData()
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../../../node_modules/swiper/dist/css/swiper.css");
	@import url("../../../../styls/main.less");
	.banner{
		.w(375);
		.h(251);
		// .margin(8px,8px,4px,8px);
		.swiper-slide{
			display: inline-block;
			img{
				display:inline-block;
				.w(360);
				.h(242);
			}
		}
	}
</style>