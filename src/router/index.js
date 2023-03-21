import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),


  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
      }
  ],
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active"
})

export default router;