import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Bitten from '@/views/Bitten'
import DontChange from '@/views/DontChange'
import Keurig from '@/views/Keurig'
import XBPointStream from '@/views/XBPointStream'
import Mustang from '@/views/Mustang'
import SpaceWeHold from '@/views/SpaceWeHold'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Bitten',
      name: 'Bitten',
      component: Bitten
    },
    {
      path: '/DontChange',
      name: 'DontChange',
      component: DontChange
    },
    {
      path: '/Keurig',
      name: 'Keurig',
      component: Keurig
    },
    {
      path: '/XBPointStream',
      name: 'XBPointStream',
      component: XBPointStream
    },
    {
      path: '/Mustang',
      name: 'Mustang',
      component: Mustang
    },
    {
      path: '/SpaceWeHold',
      name: 'SpaceWeHold',
      component: SpaceWeHold
    },

  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
})
