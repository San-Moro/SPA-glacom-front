<script>
import axios from 'axios';
export default {
    name: 'ArticleDetail',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            article: {}
        }
    },
    props: {
        article: Object
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`${this.baseUrl}/api/articles/${slug}`).then((resp) => {
            console.log(resp.data.article);
            this.article = resp.data.article;
        }) 
    }
    
}
</script>

<template>
    <div class="article-detail">
        <div class="container">
            <h2 class="text-center mb-4">{{ this.article.title }} </h2>
            <img v-if="this.article.cover_image" :src="`${baseUrl}/storage/${this.article.cover_image}`" class="card-img-top" alt="">
            <p v-else>No Image</p>
            <p>{{ this.article.description }}</p>

        </div>

    </div>
</template>

<style scoped lang="scss">
.article-detail {
    padding-top: 120px;
}

</style>