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
    meta: { layout: MainLayout },
  },
  {
    path: '/my-courses',
    name: 'MyCourses',
    component: MyCourses,
    meta: { layout: MainLayout },
  },
  {
    path: '/all-courses',
    name: 'AllCourses',
    component: AllCourses,
    meta: { layout: MainLayout },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
