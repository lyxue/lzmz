<template>
	<router-link to="/buyCar">
		<div class='buyBtn'>
	        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
	        <span>{{num}}</span>
	    </div>		
	</router-link>

</template>

<script type="text/javascript">



	export default{
		name:'buyBtn',
		props:['num'],
		data(){
			return {
			}
		},
		methods:{

		},
		created(){

		}

		

	}

</script>

<style lang="less" scoped>

 @import url('../../../styls/main.less');
 	.buyBtn{
 		position:relative;
 		.w(40);
 		.h(40);
 		border-radius:50%;
 		background: #ff666b;
 		text-align:center;
 		position:fixed;
 		left:10px;
 		bottom:50px; 			
 		i{
 			.fs(20);
 			.lh(38);
 			color:#fff;
 		} 			
 		span{
 			position:absolute;
 			right:-15%;
 			top:-15%;
 			color:#ff666b;
 			.w(20);
 			.h(20);
 			border-radius:50%;
 			background:#fff;
 			.lh(20);
 			display: block;
 			text-align: center;
 		}
 	}


</style>