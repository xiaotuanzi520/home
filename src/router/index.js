import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Help from '../pages/help'
import Case from '../pages/case'
import Spaces from '../pages/spaces'
import HotSpaces from '../pages/hotSpaces'
import RentOwner from '../pages/rentOwner'
import CreateHouse from '../pages/createHouse'
import Outline from '../pages/outline'
import Introduction from '../pages/introduction'
import History from '../pages/history'
import Service from '../pages/service'
import Cooperation from '../pages/cooperation'
import Address from '../pages/address'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
   {
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
    }, {
      path: '/createHouse',
      name: 'CreateHouse',
      component: CreateHouse
    }, {
      path: '/outline',
      name: 'Outline',
      component: Outline
    }, {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    }, {
      path: '/history',
      name: 'History',
      component: History
    }, {
      path: '/service',
      name: 'Service',
      component: Service
    }, {
      path: '/cooperation',
      name: 'Cooperation',
      component: Cooperation
    }, {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
