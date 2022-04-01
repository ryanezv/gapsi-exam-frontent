import { createWebHistory, createRouter } from "vue-router";
const routes = [{
    path: "/",
    name: "home",
    component: () => import("./components/Content.vue")
},
{
    path: "/suppliers",
    name: "suppliers",
    component: () => import("./components/Suppliers/index.vue")
},
{
    path: "/suppliers/add",
    name: "suppliers-add",
    component: () => import("./components/Suppliers/add")
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;