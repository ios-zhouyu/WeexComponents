/*global Vue*/
import Router from 'vue-router'
// import Web from '@/components/web'
import Div from '@/components/div'
import Image from '@/components/image'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'page',
      component: Image
    }
  ]
})
