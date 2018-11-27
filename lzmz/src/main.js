import Vue from 'vue'

//全局样式
import './styls/reset.less'

//引入axios
// axios 挂载到vue的实例上 这样他的拓展实例 
import Axios from 'axios'
Vue.prototype.$axios=Axios

// //引入qs(解决axios的post请求)
// import axios from 'axios';

Vue.config.productionTip = false

import App from './App'

//引入全局的配置样式
import './styls/reset.less'

// 全局引入动画
import '../node_modules/animate.css/animate.css';

// 全局引入ajax请求第三方插件

Vue.prototype.$axios=Axios;   		// 组件是vue实例的一个子类，所有vue原型链上的属性  子类也会继承

import qs from 'qs';
Vue.prototype.$qs = qs;

// 全局创建过滤器
//作用：比如说前面我需要使用到时间戳，是一长串数字。我们需要经过转换处理成（2018.11.18.。。。）这样
Vue.filter('test',function(value){
	return new Date(value).getDate();
})
 
 
 //全局引入无线加载  三句话  以后在哪使用就添加这句话     import { Toast } from 'mint-ui';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)   

// 懒加载
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);

Vue.config.productionTip = false

//在此处进行路由挂载
// 1.引入路由  =====>之后就可以进行路由挂载
import router from './router/index.js' 

new Vue({
  el: '#app',
	router: router,      //此时就已经挂载好了路由  在他的子页下面就可以尽情的使用该路由了
  components: { App },   //注册组件
  template: '<App/>'     //用组件元素来替换根元素
})
