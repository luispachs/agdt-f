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
import Users from '@/views/nested/Configuration/users.vue';
import Payments from '@/views/nested/Configuration/payments.vue';
import Store from '@/views/nested/Configuration/store.vue';
import Roles from '@/views/nested/Configuration/roles.vue';
import Products from '@/views/nested/Configuration/products.vue';
import Modifications from '@/views/nested/Configuration/modifications.vue';
import Stats from '@/views/nested/Configuration/stats.vue';
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
        {path:'',component:DefaultConfiguration,beforeEnter:AuthenticationGuard},
        {path:'users',component:Users,beforeEnter:AuthenticationGuard},
        {path:'payments',component:Payments,beforeEnter:AuthenticationGuard},
        {path:'stores',component:Store,beforeEnter:AuthenticationGuard},
        {path:'roles',component:Roles,beforeEnter:AuthenticationGuard},
        {path:'products',component:Products,beforeEnter:AuthenticationGuard},
        {path:'modifications',component:Modifications,beforeEnter:AuthenticationGuard},
        {path:'stats',component:Stats,beforeEnter:AuthenticationGuard},

      ]
    }
  ],
})

export default router
