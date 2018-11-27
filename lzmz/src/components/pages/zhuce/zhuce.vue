<template>
    <div class="zhuce">
        <zhuceHeader></zhuceHeader>
        <section class="page">
                <div class="reg_bd" id="reg_form">
                    <p>
                        <input type="number" class="text" name="mobile" placeholder="输入手机号">
                    </p>
                    <p class="code_line">
                        <input type="number" class="text text_code" name="code" placeholder="输入验证码">
                        <a href="javascript:;" class="btn send_code">发送验证码</a>
                    </p>
                    <p>
                        <input type="password" class="text" name="password" placeholder="请设置密码">
                    </p>
                </div>
                <div class="reg_xieyi">
                注册即视为同意
                    <a href="#">《丽子美妆网络服务协议》</a>
                </div>
                <div class="btn_bd">
                    <p>
                        <a href="#" class="btn2" id="reg_btn">注册</a>
                    </p>
                </div>
</section>
        

    </div>
</template>

<script>
    import zhuceHeader from './zhuceHeader.vue';
    
    export default{
        name:'zhuce',
        components: {
            zhuceHeader
        },
        data(){
            return{
                name:'登录'
            }
        },
        methods:{
            
        }   
    }
</script>

<style type="text/css" lang="less" scoped>
    @import url("../../../styls/main.less");
   .zhuce{
        .w(375);
        background:#fff;
        .page{
            .w(375);
            .h(365);
            .padding(66,20,20,20);
        }
            .reg_bd p{
                .margin(0,0,20,0);
            }
                      input{
                    .fs(15);
                 }
                    .text{
                        border: 1px solid #d8d8da;
                        .padding(12,12,12,12);
                        box-sizing: border-box;
                    }
                     .code_line{
                    display: -webkit-box;
            }
                    .code_line .btn send_code{
                    .w(88);
                    .padding(8,5,5,7);
                    .margin(5,0,0,0);
                    .fs(12);
           }
           .reg_xieyi{
            color:#999;
            .margin(0,0,20,0);
            .fs(14);
           }
           .btn_bd .btn2{
                    display: block;
                   .padding(12,12,12,13);
                   .h(40);
                    .lh(20);
                   .fs(14);
                    color: #fff;
                    background-color: #000;
                    vertical-align: middle;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    text-align: center;
           }

               
   }
    
</style>