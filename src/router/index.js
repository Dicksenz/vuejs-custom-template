import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Students from '../views/Students.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Login from '../views/Login.vue';
import MyCourses from '../views/MyCourses.vue';
import AllCourses from '../views/AllCourses.vue';
import MainLayout from '../layouts/MainLayout.vue';
import LoginLayout from '../layouts/LoginLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
    meta: { layout: LoginLayout },
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { layout: LoginLayout },
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: MainLayout },
  },
  {
    path: '/students',
    name: 'Students',
    component: Students,
    meta: { layout: MainLayout, requiresAuth: true },
  },
  {
    path: '/my-courses',
    name: 'MyCourses',
    component: MyCourses,
    meta: { layout: MainLayout, guest: true },
  },
  {
    path: '/all-courses',
    name: 'AllCourses',
    component: AllCourses,
    meta: { layout: MainLayout, is_admin: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      let user = JSON.parse(localStorage.getItem('user'));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next();
        } else {
          next({ name: 'userboard' });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next();
    } else {
      next({ name: 'userboard' });
    }
  } else {
    next();
  }
});

export default router;
