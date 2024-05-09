import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import AitView from "@/views/AitView.vue";
import MustKastView from "@/views/MustKastView.vue";
import KolgusView from "@/views/KolgusView.vue";
import PuhkemajaView from "@/views/PuhkemajaView.vue";
import GlampingView from "@/views/GlampingView.vue";

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
        path: '/puhkemaja',
        name: 'puhkemajaRoute',
        component: PuhkemajaView
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
