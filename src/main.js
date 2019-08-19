// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import login from './components/login'

// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios')
// axios.defaults.baseURL = 'http://127.0.0.1:8080'
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.adminTest = ''
Vue.prototype.GLOBAL = 'tt'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
