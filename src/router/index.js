import Vue from 'vue'
import Router from 'vue-router'
import queryHotel from '@/components/queryHotel'
import queryPark from '@/components/queryPark'
import login from '@/components/login'
import admin from '@/components/admin'
import queryTicket from '@/components/queryTicket'
import submitComplaint from '@/components/submitComplaint'
import queryComplaint from '@/components/queryComplaint'
import showComplaint from '@/components/showComplaint'
import dealComplaint from '@/components/dealComplaint'
import replyComplaint from '@/components/replyComplaint'
import welcome from '@/components/welcome'
import submitAlarm from '@/components/submitAlarm'
import queryAlarm from '@/components/queryAlarm'
import showAlarm from '@/components/showAlarm'
import dealAlarm from '@/components/dealAlarm'
import replyAlarm from '@/components/replyAlarm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/queryHotel',
      name: 'queryHotel',
      component: queryHotel
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
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/queryTicket',
      name: 'queryTicket',
      component: queryTicket
    },
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/submitComplaint',
      name: 'submitComplaint',
      component: submitComplaint
    },
    {
      path: '/queryComplaint',
      name: 'queryComplaint',
      component: queryComplaint
    },
    {
      path: '/showComplaint/:id',
      name: 'showComplaint',
      component: showComplaint
    },
    {
      path: '/dealComplaint',
      name: 'dealComplaint',
      component: dealComplaint
    },
    {
      path: '/replyComplaint/:id',
      name: 'replyComplaint',
      component: replyComplaint
    },
    {
      path: '/submitAlarm',
      name: 'submitAlarm',
      component: submitAlarm
    },
    {
      path: '/queryAlarm',
      name: 'queryAlarm',
      component: queryAlarm
    },
    {
      path: '/showAlarm/:id',
      name: 'showAlarm',
      component: showAlarm
    },
    {
      path: '/dealAlarm',
      name: 'dealAlarm',
      component: dealAlarm
    },
    {
      path: '/replyAlarm/:id',
      name: 'replyAlarm',
      component: replyAlarm
    }

  ]
})
