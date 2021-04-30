import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Students from '../views/Students.vue';
import MyCourses from '../views/MyCourses.vue';
import AllCourses from '../views/AllCourses.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/students',
    name: 'Students',
    component: Students,
  },
  {
    path: '/my-courses',
    name: 'MyCourses',
    component: MyCourses,
  },
  {
    path: '/all-courses',
    name: 'AllCourses',
    component: AllCourses,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
