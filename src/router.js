import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ArticlesList from "./pages/ArticlesList.vue";
import ArticleDetail from "./pages/ArticleDetail.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
   
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/articles', //'/articles/:id'
            name: 'articles',
            component: ArticlesList
        },
        {
            path: '/articles/:slug',
            name: 'detail',
            component: ArticleDetail,
            props: true,
        }
    ]
})

export { router }