import { createRouter, createWebHistory } from 'vue-router'
import ChartPage from '../components/ChartPage.vue'
import TablePage from '../components/TablePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/chart',
      name: 'chart',
      component: ChartPage
    },
    {
      path: '/table',
      name: 'table',
      component: TablePage
    }
  ]
})

export default router
