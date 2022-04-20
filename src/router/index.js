import { createRouter, createWebHistory } from 'vue-router'
import Students from '../views/students.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'students',
      component: Students
    }
  ]
})

export default router
