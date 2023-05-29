<script>
export default {
    name: 'ArticleCard',
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
            textMaxLength: 100
        }
    },
    props: {
        article: Object
    },
    computed: {
        truncateText() {
            if(this.article.description && this.article.description.length > this.textMaxLength) {
                return this.article.description.substr(0, this.textMaxLength) + '...';
            }
            return this.article.description;
        }
    }
    
}
</script>

<template>
    <div class="card mb-4">
        <img v-if="article.cover_image" :src="`${baseUrl}/storage/${article.cover_image}`" class="card-img-top" alt="...">
        <div v-else>No image</div>
        <div class="card-body">
            <h5 class="card-title">{{ article.title }}</h5>
            <p class="card-text">{{ truncateText }}</p>
            <!-- <a href="#" class="btn btn-primary">More Details</a> -->
            <router-link :to="{name: 'detail', params: { slug: article.slug }}" class="btn btn-primary">More Details</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>