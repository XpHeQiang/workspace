// 这里面负责写路由映射，便于管理


// 引入路由模块并使用它
import Vue from 'vue';
import VueRouter from 'vue-router';
import sy from '../components/content/sy.vue';
import sj from '../components/content/sj.vue';
import my from '../components/content/my.vue';
Vue.use(VueRouter);


// 创建路由实例并配置路由映射
// path:'*',redirect:'/home'  重定向到path是/home的映射
let router = new VueRouter({
  routes:[{
    path: '/sy', component: sy
  },{
    path: '/sj',component: sj
  },{
    path: '/my',component: my
  }]
});
// router.go("/sy");

// 输出router
export default router;
