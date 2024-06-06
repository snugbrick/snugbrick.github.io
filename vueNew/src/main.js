import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
//import App from './components/legacy/App.vue';
import mod from './mod.vue';

// 创建路由
const routes = [
  { path: '/mod', component: mod },
];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 创建应用程序实例
const app = createApp(mod);

// 使用路由
app.use(router);

// 挂载应用程序实例
app.mount('#app');