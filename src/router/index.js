import Vue from 'vue'
import Router from 'vue-router'
import queryHotel from '@/components/queryHotel'
import queryPark from '@/components/queryPark'
import index from '@/components/index'
import login from '@/components/login'
import home from '@/components/home'
import queryTicket from '@/components/queryTicket'
import sceneryCenter from '@/components/sceneryCenter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/queryHotel',
      name: 'queryHotel',
      component: queryHotel,
    },
    {
      path: '/queryPark',
      name: 'queryPark',
      component: queryPark
    },
    {
      path: '/login',
      name: 'login',
      component: login

    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/queryTicket',
      name: 'queryTicket',
      component: queryTicket
    },
    {
      path:'/sceneryCenter',
      name:'sceneryCenter',
      component:sceneryCenter
    }


  ]
})
