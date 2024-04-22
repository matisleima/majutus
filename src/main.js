// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router'; // import your router configuration
//
//
//
// import VueAxios from "vue-axios";
// import axios from "axios";
// import "@/assets/css/my-style.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
//
//
// console.log('Creating app...');
// const app = createApp(App)
// console.log('App created.');
//
// app.use(router)
// app.use(VueAxios, axios)
// console.log('Mounting app...');
// app.mount('#app')
// console.log('App mounted.');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
