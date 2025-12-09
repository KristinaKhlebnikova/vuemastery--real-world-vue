import { createRouter, createWebHistory } from 'vue-router'

import EventListView from '@/views/EventListView.vue'
import EventDetailsView from '@/views/EventDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListView
  },
  {
    path: '/event/:id',
    name: 'event-details',
    props: true,
    component: EventDetailsView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
