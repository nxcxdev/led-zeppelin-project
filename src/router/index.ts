import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import VideoView from '../views/VideoView.vue'
import ShowsView from '../views/ShowsView.vue'
import ShopView from '../views/ShopView.vue'
import HistoryView from '../views/HistoryView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideoView
    },
    {
      path: '/shows',
      name: 'shows',
      component: ShowsView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    }
  ]
})

export default router
