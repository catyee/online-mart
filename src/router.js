import Vue from 'vue';
import VueRouter from 'vue-router';

// 路由懒加载
const getComponent = (name) => () => import(`./views/${name}.vue`);

Vue.use(VueRouter);

const router = new VueRouter({
   routes:  [
    {
        path: '/',
        redirect: {name: 'Home'}
    },
    {
        path: '/home',
        name: 'Home',
        component: getComponent('Home')
    },
    {
        path: '/list',
        name: 'List',
        component: getComponent('List'),
    },
]
});

export default router;