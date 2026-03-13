import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import AlbumView from '@/views/AlbumView.vue';
import PhotoView from '@/views/PhotoView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),//加hush確保開啟成功
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/album',
      name:'album',
      component: AlbumView,
    }, 
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/photo/:id',
      name: 'photo',
      component: PhotoView,
    },
  ],
})

export default router
