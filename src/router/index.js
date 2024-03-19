import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home-Page.vue'
import LoginPage from '../views/Login-Page.vue'
import PostShayari from '../views/Post-Shayari.vue'
import ProfilePage from '../views/Profile-Page.vue'
import ShayariPage from '../views/ShayariPage.vue'
import SignupPage from '../views/Signup-Page.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      name: 'signup',
      path: '/signup',
      component: SignupPage
    },
    {
      name: 'home',
      path: '/home',
      component: HomePage
    },
    {
      name: 'profile',
      path: '/profile',
      component: ProfilePage
    },
    {
      name: 'shayari',
      path: '/shayari/:category',
      component: ShayariPage,
      props: true
    },
    {
      name: 'addShayai',
      path: '/aadab',
      component: PostShayari
    }
  ]
})

export default router
