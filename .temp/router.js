import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
// import Web from '@/components/web'
import Div from '@/components/div'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'web',
      component: Div
    }
  ]
})
