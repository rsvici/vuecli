import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/argu/:name',
    component: () => import('@/views/Argu.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/Parent.vue'),
    children: [{
      path: 'child',
      name: 'child',
      component: () => import('@/views/Child.vue')
    }]
  },
  {
    path: '/name_view',
    components: {
      default: () => import('@/views/Child.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/Store.vue')
  },
  {
    path: '*',
    redirect: to => '/'
  }
]
