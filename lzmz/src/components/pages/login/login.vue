<template>
	<div class="login">
		<loginHeader></loginHeader>
		<section class="page">
			<div class="login_bd" id="login_form">
				<input type="text" class="text" name="username" placeholder="输入手机号/邮箱/用户名"><br />
				<input type="password" class="text" name="password" placeholder="登录密码">
			</div>
			<div class="forget_pwd">
				<a href="#">忘记密码?</a>
			</div>
			<div class="btn_bd">
				<p >
					<span  class="btn">登录</span>
				</p>
				<p class="zc" @click="goZhuce">
					<span  class="btn2">注册</span>
				</p>
			</div>
			<div class="login_third">
				<p>
					<span>第三方账号登录</span>
				</p>
				<div class="bd">
					<div>
						<a href="https://m.lizi.com/login/tencent"><i class="fa fa-qq" aria-hidden="true"></i></a>
					</div>
					<div class="mid">
						<a href="https://m.lizi.com/login/sinaWeibo"><i class="fa fa-weibo" aria-hidden="true"></i></a>
					</div>
					<div>
						<a href="https://m.lizi.com/login/alipay"><i class="iconfont">&#xe630;</i></a>
					</div>
				</div>
			</div>
		</section>

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
			goZhuce(){
				this.$router.push('/zhuce')
			}
		},
		created:{
			
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import url("../../../styls/main.less");
	.login{
		.w(375);
		background:#fff;
		.page{
			.w(375);
			.h(450);
			.padding(66,20,20,20);

		}
			.login_bd input{
				.w(335);
				.h(47);
				.margin(0,0,20,0);
				outline: 0;
			}
			.login_bd input .text{
				border:1px solid #d8d8da;
			}
			.forget_pwd{
				text-align:right;
				.margin(-10,0,40,0);
			}
			.btn_bd p{
				.margin(0,0,20,0);
				.h(47);	
				background: #ff666b;
			}
			.btn_bd p .btn{
				display:block;
				.padding(12,12,12,12);
				.h(20);
				.lh(20);
				.fs(20);
				text-align:center;
			}
			.btn_bd .zc{
				.margin(0,0,20,0);
				.h(47);	
				background: #000;
			}
			.btn_bd .zc .btn2{
				display:block;
				.padding(12,12,12,12);
				.h(20);
				.lh(20);
				.fs(20);
				text-align:center;
				color:#fff;
			}
			.login_third p{
				text-align:center;
				color:#999;
			}
			.login_third .bd{
				display: -webkit-box;
				.padding(30,0,0,0);
				text-align:center;

			}
			.login_third .bd div{
				.w(50%);
			}
			.login_third .bd div a{
				.fs(30);
				color:#999;
			}
			.login_third .bd div{
				.w(90%);
			}
	}
</style>