import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue/client'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JS (optional, if you need JavaScript components)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';

const head = createHead();
const app = createApp(App);
app.use(head);
app.use(router);
app.mount('#app');




