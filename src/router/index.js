import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/editor-movie',
      name: 'EditorMovie',
      component: () => import('../views/EditorMovie.vue')
    },
    {
      path: '/details/:id',
      name: 'DetailsMovie',
      component: () => import('../views/DetailsMovie.vue'),
      props: true
    }

  ]
})

export default router
