<template>
	<div class="slideDetail">
	  <div class="swiper-container">
	    <div class="swiper-wrapper">
	      <div class="swiper-slide" v-for="(item,index) in list" :key="index">
	      	<img :src="'https://images.weserv.nl/?url='+item">
	      </div>
	    </div>
	    <div class="swiper-pagination page"></div>
	    <div class="title">
	    	<p>{{name}}</p>
	    	<i class="fa fa-star-o" aria-hidden="true"></i>
	    </div>
	  </div>
	</div>
</template>

<script type="text/javascript">

	import  Vue from 'vue';
	import Swiper from 'swiper';

	export default{
		name:'slideDetail',
		data(){
			return {
				list:[],
				name:this.name
			}
		},
		methods:{
			getData(){
				let productId = this.$qs.stringify({
				    id:2
				});
				this.$axios({
				    method: 'post',
				    url:'/api/goods/findById',
				    data:productId
				}).then((res)=>{
					this.list = res.data.data[0].producturl;
					this.name = res.data.data[0].name;
				    // console.log(res.data.data[0].name);
				    Vue.nextTick(()=>{
				    	this.initSlide();
				    })
				    
				
				});
			},
			initSlide(){
			    var swiper = new Swiper('.swiper-container', {
			      loop: true,
			      pagination: {
			        el: '.swiper-pagination',
			        type: 'fraction',
			      }
			    })					
			}		
		},
		created(){
			this.getData();
		}

		

	}

</script>

<style lang="less" scoped>
 @import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
 @import url('../../../styls/main.less');
 	.slideDetail{
 		position:relative;
 		.margin(44,0,0,0);
 		.swiper-slide{
 			width:100%;
 			.h(200);
 			display: flex;
 			justify-content: center;
 			img{
 				display: block;
 				.h(200);
 				.w(200);
 			}				
 		}
 		.title{
 			position:absolute;
 			right:0;
 			bottom:0;
 			left:0;
 			.h(40);
 			color:#fff;
 			background: rgba(0,0,0,.3);
 			z-index: 99;
 			.fs(12);
 			display: flex;
 			justify-content: space-between;
 			p{
 				.padding(3,0,3,10);
 				.lh(18);
 				.h(40);
 				white-space: wrap;
 				.w(300);
 			}
 			i{
 				.fs(20);
 				.lh(40);
 				.padding(0,10,0,10);
 			}
 		} 

 		.page{
 			border-radius: 50%;
 			position:absolute;
 			background:rgba(0,0,0,.3);
 			.w(30);
 			.h(30);
 			.lh(30);
 			color:#fff;
 			text-align:center;
 			top:5px;
 			left:5px;
 		}

 	}


</style>