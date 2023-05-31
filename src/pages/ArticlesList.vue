<script>
import axios from 'axios';
import ArticleCard from '../components/ArticleCard.vue';
export default {
    name: 'ArticlesList',
    components: {ArticleCard},
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            articles: [],
        }
    },
    created() {
        this.getArticles();
    },
    methods: {
        getArticles() {
            axios.get(`${this.baseUrl}/api/articles`).then(resp => {
                this.articles = resp.data.result;
                console.log(this.articles);
            })
        }
    }
}
</script>

<template>
    <div class="ms_article_list">
        <h2 class="text-center">All our articles</h2>
        <div class="container">
            <div class="row row-cols-2 justify-content-center">
                <div class="col-10 g-3">
                    <ArticleCard  v-for="article in articles" :key="article.id" :article="article"/>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped lang="scss">
.ms_article_list {
    padding-top: 120px;
    background-color: var(--primary);
    h2 {
        color: var(--secondary);
        font-size: 45px;
    }
}
</style>