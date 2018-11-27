import Vue from 'vue';
import VueRouter from 'vue-router';

 // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
 Vue.use(VueRouter)

//详情页
import detailCont from '../components/pages/details/detailCont'
import SlideDetail from '../components/pages/details/slideDetail'
//购物车页面
import buyCar from '../components/pages/details/buyCar.vue'

import Lizi from '../components/pages/list/Lizi/Lizi'    
import Danpin from '../components/pages/list/Danpin/Danpin'
import Newpin from '../components/pages/list/newpin/newpin'    
import Meibai from '../components/pages/list/Meibai/Meibai' 
import Baoshi from '../components/pages/list/Baoshi/Baoshi'    
import Geli from '../components/pages/list/Geli/Geli'    
import Login from '../components/pages/login/login'
import Zhuce from '../components/pages/zhuce/zhuce'
import Details from '../components/commons/Details'

Vue.use(VueRouter)

const routes=[
		 { path: '/',redirect: '/Lizi'},
		 {path:'/Lizi',component: Lizi,name:'Lizi'},
		 {path:'/danpin',component: Danpin,name:'danpin'},      
		 {path:'/newpin',component: Newpin,name:'newpin'},
		 {path:'/meibai',component: Meibai,name:'meibai'},
		 {path:'/baoshi',component: Baoshi,name:'baoshi'},
		 {path:'/geli',component: Geli,name:'geli'},
		 {path:'/login',component:Login,name:'login'},
		 {path:'/zhuce',component:Zhuce,name:'zhuce'},
		 {path:'/details',component:Details,name:'details'},
		 {path:'/slideDetail',component:SlideDetail,name:'slideDetail'},
		 {path:'/detailCont',component:detailCont,name:'detailCont'},
		 {path:'/buyCar',component:buyCar,name:'buyCar'}
	 ]
	 
const router = new VueRouter({
	routes
 })

export default router

