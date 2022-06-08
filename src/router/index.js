import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/prices",
        name: "Price",
        component: () => import(/* webpackChunkName: "price" */ "../views/Price.vue"),
    },

    // { path: "/:pathMatch(.*)*", name: "This Page Doesn't Exist", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
