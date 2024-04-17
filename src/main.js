import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // import your router configuration



import VueAxios from "vue-axios";
import axios from "axios";
import "@/assets/css/my-style.css"
import 'bootstrap/dist/css/bootstrap.min.css';



const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')