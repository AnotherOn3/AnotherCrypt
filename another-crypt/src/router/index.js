import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Signup from '@/components/Signup';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

const requireAuth = (to, from, next) => {
  if (!auth.currentUser) {
    console.log('User is not logged in');
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    console.log('User is logged in:', auth.currentUser.uid);
    next();
  }
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      beforeEnter: requireAuth,
    },
  ],
});
