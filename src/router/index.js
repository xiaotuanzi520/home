import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index'
import Header from '../components/header/index'
import Footer from '../components/footer/index'
import Help from '../pages/help/index'
import Case from '../pages/case/index'
import Spaces from '../pages/spaces/index'
import HotSpaces from '../pages/hot-spaces/index'
import RentOwner from '../pages/rent-owner/index'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    }, {
      path: '/case',
      name: 'Case',
      component: Case
    }, {
      path: '/spaces',
      name: 'Spaces',
      component: Spaces
    }, {
      path: '/hotSpaces',
      name: 'HotSpaces',
      component: HotSpaces
    }, {
      path: '/rentOwner',
      name: 'RentOwner',
      component: RentOwner
    }
  ]
})
