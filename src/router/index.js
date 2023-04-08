import { createRouter, createWebHashHistory } from 'vue-router'

import BlogSystem from '../components/blog/BlogSystem.vue'
import AboutMe from '../components/about/AboutMe.vue'
import FavoriteThing from '../components/favorite/FavoriteThing.vue'
import MyProject from '../components/project/MyProject.vue'

const routes = [
  { path: '/', component: BlogSystem },
  { path: '/about', component: AboutMe },
  { path: '/favorite', component: FavoriteThing },
  { path: '/project', component: MyProject },
]
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router