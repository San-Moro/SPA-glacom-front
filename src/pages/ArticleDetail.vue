<script>
export default {
    name: 'ArticleDetail',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            article: {},
            article_id: ''
        }
    },
    created() {

        const slug = this.$route.slug;
        axios.get(`${this.baseUrl}/api/articles/${slug}`).then(resp => {
            this.article = resp.data.result;
            this.article_id = resp.data.result.article.id;
            console.log(this.article);
            console.log(this.article_id);
        })

    }
}
</script>

<template>
    <div class="article-detail">
        <h2 class="text-center">Detail</h2>
        <div class="container">
            <div class="row row-cols-3">
                <div class="col g-3" v-for="article in articles" :key="article.id">
                    <div class="card">
                        <img v-if="article.cover_image" :src="`${baseUrl}/storage/${article.cover_image}`" class="card-img-top" alt="...">
                        <div v-else>No image</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ article.title.id }}</h5>
                            <p class="card-text">{{ article.description.id }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.article-detail {
    padding-top: 120px;
}

</style>