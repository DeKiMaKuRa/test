import { createApp } from 'vue';
import App from './App.vue';
import NavComp from './components/Navigations.vue'; 

import { createRouter, createWebHistory } from 'vue-router';

import ChatPage from './components/Chat.vue';
import HomePage from './components/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/chat', name: 'Chat', component: ChatPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component('NavComp', NavComp);

app.use(router);
app.mount('#app');
