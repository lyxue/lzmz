<template>
	<div class='moveTop' @click='goTop'>
    <transition
      enter-active-class='animated fadeIn'
      leave-active-class='animated fadeOut'
    >
      <div class='contain' v-show='show'>
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
    </transition>
	</div>
</template>

<script type="text/javascript">



	export default{
		name:'moveTop',
		data(){
			return {
	         show:false,
	         distance:200
			}
		},
		methods:{
	      goTop(){
	        window.scrollTo(0,0);
	      }

		},
		created(){
	      window.addEventListener('scroll',()=>{
	 
	        let y=window.scrollY
	        if (y>=this.distance) {
	          if (this.show==false) {
	            this.show=true
	          }
	          
	        }else{
	          if (this.show==true) {
	              this.show=false
	          }
	          
	        }
	      })
		}

		

	}

</script>

<style lang="less" scoped>

 @import url('../../styls/main.less');
 	.moveTop{
 		.contain{
	 		.w(40);
	 		.h(40);
	 		border-radius:50%;
	 		background: rgba(0,0,0,.4);
	 		text-align:center;
	 		position:fixed;
	 		.right(10);
	 		bottom:50px; 			
	 		i{
	 			.fs(20);
	 			.lh(38);
	 			color:#fff;
	 		} 			
 		}

 	}


</style>