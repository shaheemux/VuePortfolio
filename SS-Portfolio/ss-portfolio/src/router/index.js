import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Resume from '../views/Resume.vue'
import Projects from '../views/Projects.vue';
import Testimonials from '../views/Testimonials.vue'
import ContactView from '../views/ContactView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: Testimonials
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
    
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
