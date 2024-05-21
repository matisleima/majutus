import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueGtag from 'vue-gtag';

const app = createApp(App);

// Configure Google Analytics
app.use(VueGtag, {
    config: { id: 'G-YLXBHW1Z39' }
}, router);

app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
