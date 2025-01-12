import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia'; // Import Pinia
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Initialize Pinia and use it in the app
const pinia = createPinia();
app.use(pinia);

// If you have a router, also use it
app.use(router);

app.mount('#app');
