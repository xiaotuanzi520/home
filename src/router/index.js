import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Land from '@/components/Land'
import Addmessage from '@/components/Addmessage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/land',
      name: 'Land',
      component: Land
    }, {
      path: '/addmessage',
      name: 'Addmessage',
      component: Addmessage
    }
  ]
})
