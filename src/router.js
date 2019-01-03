import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home.vue'
import Animate from './views/animate.vue'
import People from './views/people.vue'

Vue.use(VueRouter)

export default function createRouter() {
  let router = new VueRouter({
    mode: 'history',
    routes: [
      {
        alias: '/',
        path: '/home',
        component: Home
      },
      {
        path: '/animate',
        component: Animate
      },
      {
        path: '/people',
        component: People
      }
    ]
  })

  return router
}