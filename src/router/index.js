import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index'
import Register from '../components/register/index'
import Login from '../components/login/index'
import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Help from '../pages/help/index'
Vue.use(Router);

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
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/header',
      name: 'Header',
      component: Header
    }, {
      path: '/footer',
      name: 'Footer',
      component: Footer
    }, {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
