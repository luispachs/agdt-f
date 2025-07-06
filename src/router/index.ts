import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import Dashboard from '@/views/Dashboard.vue';
import Service from '@/views/nested/Service.vue';
import DefaultDashboard from '@/views/nested/DefaultDashboard.vue';
import { AuthenticationGuard } from '@/utils/Guards/AuthenticationGuard';
import Configuration from '@/views/Configuration.vue';
import DefaultConfiguration from '@/views/nested/DefaultConfiguration.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path:'/dashboard',
      component:Dashboard,
      beforeEnter:AuthenticationGuard,
      children: [
        {path:'',component:DefaultDashboard,name:'default-dashboard',beforeEnter:AuthenticationGuard},
        {path:'service/:id',component:Service,name:'service',beforeEnter:AuthenticationGuard}
      ]
    },
    {
      path:'/configuration',
      component:Configuration,
      children :[
        {path:'',component:DefaultConfiguration,beforeEnter:AuthenticationGuard}
      ]
    }
  ],
})

export default router
