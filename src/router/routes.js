const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageStart.vue') },
      { path: '/login', component: () => import('pages/PageLogin.vue')},
      { path: '/register', component: () => import('pages/PageRegister.vue')},
      { path: '/chat', component: () => import('pages/PageChat.vue')},
      { path: '/users', component: () => import('pages/PageUser.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
