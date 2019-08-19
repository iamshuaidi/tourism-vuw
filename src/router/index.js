import Vue from 'vue'
import Router from 'vue-router'
import queryHotel from '@/components/queryHotel'
import queryPark from '@/components/queryPark'
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
import AdministratorLogin from '@/components/AdministratorLogin'
import WebmasterCentral from '@/components/WebmasterCentral'

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
      name: 'AdministratorLogin',
      component: AdministratorLogin

    },
    {
      path: '/admin',
      name: 'admin',
      component: WebmasterCentral
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
    },
    {
      path: '/AdministratorLogin',
      name: 'AdministratorLogin',
      component: () => import('@/components/AdministratorLogin.vue')
    },
    {
      path: '/webmasterCentral',
      name: 'WebmasterCentral',
      component: () => import('@/components/WebmasterCentral.vue')
    },
    {
      path: '/AdministratorInformation',
      name: 'AdministratorInformation',
      component: () => import('@/components/AdministratorInformation.vue')
    },
    {
      path: '/AdministratorLogin2',
      name: 'AdministratorLogin2',
      component: () => import('@/components/AdministratorLogin2.vue')
    },
    {
      path: '/EmergencyCenter',
      name: 'EmergencyCenter',
      component: () => import('@/components/EmergencyCenter.vue')
    },
    {
      path: '/WarningCenter',
      name: 'WarningCenter',
      component: () => import('@/components/WarningCenter.vue')
    },
    {
      path: '/WarningRecord',
      name: 'WarningRecord',
      component: () => import('@/components/WarningRecord.vue')
    },
    {
      path: '/EmergencyBank',
      name: 'EmergencyBank',
      component: () => import('@/components/EmergencyBank.vue')
    },
    {
      path: '/WarningWindow',
      name: 'WarningWindow',
      component: () => import('@/components/WarningWindow.vue')
    },
    {
      path: '/ReportProcessing',
      name: 'ReportProcessing',
      component: () => import('@/components/ReportProcessing.vue')
    },
    {
      path: '/NewPlan',
      name: 'NewPlan',
      component: () => import('@/components/NewPlan.vue')
    },
    {
      path: '/AddingPersonnel',
      name: 'AddingPersonnel',
      component: () => import('@/components/AddingPersonnel.vue')
    },
    {
      path: '/PersonnelManagement',
      name: 'PersonnelManagement',
      component: () => import('@/components/PersonnelManagement.vue')
    },
    {
      path: '/ModifyInformation',
      name: 'ModifyInformation',
      component: () => import('@/components/ModifyInformation.vue')
    },
    {
      path: '/AddPeople',
      name: 'AddPeople',
      component: () => import('@/components/AddPeople.vue')
    },
    {
      path: '/Deletepeople',
      name: 'Deletepeople',
      component: () => import('@/components/Deletepeople.vue')
    }


  ]
})
