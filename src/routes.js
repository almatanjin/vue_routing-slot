import {createWebHistory,createRouter} from 'vue-router'

import HomeVue from './components/HomeVue.vue'
import logIn from './components/logIn.vue'

const routes=[
    {
        name:'HomeVue',
        path:'/',
        component:HomeVue
    },
    {
        name:'logIn',
        path:'/login',
        component:logIn
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;