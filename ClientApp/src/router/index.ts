import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

import MultiStep from '@/pages/multistep/MultiStep.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/multistep',
      name: 'multistep',
      component: MultiStep,
    },
  ],
})

export default router
