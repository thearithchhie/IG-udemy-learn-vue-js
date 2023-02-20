import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ModalsView from '../views/ModalsView.vue';
import PostDetailView from '../views/PostDetailView.vue';
import PostView from '../views/PostView.vue';
import CaptionView from '../views/CaptionView.vue';
import DetailCaptionView from '../views/DetailCaptionView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PostView
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: PostDetailView
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    },
    {
      path: '/caption',
      name: 'caption',
      component: CaptionView
    },
    {
      path: '/detailCaption',
      name: 'detailCaption',
      component: DetailCaptionView
    },
  ]
})

export default router