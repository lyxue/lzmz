<template>
	<div class="footer">
		<div class="userinfo_bar" id="userinfo_bar">
			<a>15203650905</a>
			·
			<a>退出</a>
			·
			<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.lizi.app">客户端</a>
		</div>
		<section class="copyright">
		<p>丽子客服：0527-80203555</p>
		<p>©2015&nbsp;丽子美妆&nbsp;lizi.com</p>
		</section>
	</div>
</template>

<script type="text/javascript">

	export default{
		name:'Footer',
		data(){
			return {
				
			}
		},
		methods:{

		}

	}

</script>

<style lang="less" scoped>
 @import url('../../styls/main.less');
 	.footer{
 		.margin(20,0,50,0);
 		.fs(12);
 		color:#999;
 		text-align: center;
 		.userinfo_bar{
 			.h(24);
 			.padding(5,0,0,0);
	 		a{
	 			color:#999;
	 		} 			
 		}

 		.copyright{
 			p{
 				.lh(24);
 			}
 		}
 	}


</style>