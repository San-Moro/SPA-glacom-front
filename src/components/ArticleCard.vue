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
    <div class="ms_card d-flex">
        <div class="ms_img_section d-flex justify-content-center align-items-center">
            <img v-if="article.cover_image" :src="`${baseUrl}/storage/${article.cover_image}`" class="card-img-top" alt="...">
            <div v-else>No image</div>
        </div>
        <div class="ms_card_info_section d-flex">
            <h3 class="card-title">{{ article.title }}</h3>
            <!-- <p class="card-text">{{ truncateText }}</p> -->
            <!-- <a href="#" class="btn btn-primary">More Details</a> -->
            <router-link :to="{name: 'detail', params: { slug: article.slug }}" class="btn mt-4">More Details</router-link>
        </div>

    </div>
</template>

<style scoped lang="scss">
.ms_card {
    width: 100%;
    flex-direction: column;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    overflow: hidden;
    padding-bottom: 20px;
    margin: 40px 0px;

    .ms_img_section {
        background-size: cover;
    }
    .ms_card_info_section {
        flex-direction: column;
        align-items: center;
        padding: 30px;
        color: var(--secondary);
    }

    //MEDIA QUERY
    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        height: 250px;
        border-radius: 20px 0px 0px 20px;

        .ms_img_section {
        width: 40%;
        height: 100%;
        background-size: contain;
    }
        .ms_card_info_section {
            align-items: start;
            width: 60%;
        }
    }
}

</style>