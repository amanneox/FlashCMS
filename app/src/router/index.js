import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
import SignUp from '@/pages/signup'
import Profile from '@/pages/profile'
import Manage from '@/pages/contentManager'
import Create from '@/pages/addComponent'
import _Content from '@/pages/_content'
// import _Edit from '@/pages/_edit'
import _ViewItem from '@/pages/_viewItem'
import Settings from '@/pages/settings'
import Users from '@/pages/users'
import Forbidden from '@/pages/forbidden'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Forbidden
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/manage/:id',
      name: 'Content',
      component: _Content
    },
    {
      path: '/manage/view/:id',
      name: 'View',
      component: _ViewItem
    }
  ]
})
