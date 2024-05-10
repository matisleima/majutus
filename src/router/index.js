import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import AitView from "@/views/AitView.vue";
import MustKastView from "@/views/MustKastView.vue";
import KolgusView from "@/views/KolgusView.vue";
import GlampingView from "@/views/GlampingView.vue";
import PlagandoPuhkemajaView from "@/views/PlagandoPuhkemajaView.vue";

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/ait',
        name: 'aitRoute',
        component: AitView
    },
    {
        path: '/kolgus',
        name: 'kolgusRoute',
        component: KolgusView
    },
    {
        path: '/plagando-puhkemaja',
        name: 'plagandoPuhkemajaRoute',
        component: PlagandoPuhkemajaView
    },
    {
        path: '/mustkast',
        name: 'mustKastRoute',
        component: MustKastView
    },
    {
        path: '/glamping',
        name: 'glampingRoute',
        component: GlampingView
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
