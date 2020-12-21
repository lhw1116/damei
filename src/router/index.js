import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '有心人驿站',
    },
    component: Home
  },
  {
    path: '/gloang',
    name: 'Golang',
    component: () => import(/* webpackChunkName: "about" */ '../views/Golang.vue')
  },
  {
    path: '/rust',
    name: 'Rust',
    component: () => import(/* webpackChunkName: "about" */ '../views/Rust.vue')
  },
  {
    path: '/sre',
    name: 'Sre',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sre.vue')
  },
  {
    path: '/algorithm',
    name: 'Algorithm',
    component: () => import(/* webpackChunkName: "about" */ '../views/Algorithm.vue')
  },
  {
    path: '/mysql',
    name: 'Mysql',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mysql.vue')
  },
  {
    path: '/redis',
    name: 'Redis',
    component: () => import(/* webpackChunkName: "about" */ '../views/Redis.vue')
  },
  {
    path: '/mongo',
    name: 'Mongo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mongo.vue')
  },
  {
    path: '/devops',
    name: 'Devops',
    component: () => import(/* webpackChunkName: "about" */ '../views/Devops.vue')
  },
  {
    path: '/k8s',
    name: 'K8S',
    component: () => import(/* webpackChunkName: "about" */ '../views/K8S.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
