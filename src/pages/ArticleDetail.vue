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
    <div class="ms_article_detail">
        <div class="container">
            <h2 class="text-center mb-4">{{ this.article.title }} </h2>
            <!-- stars -->
            <div class="starts_reviews d-flex mb-4">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <small>231 reviews</small>
            </div>
            <div class="detail_view_mobile">
                <div class="ms_img_section d-flex justify-content-center align-items-center">
                    <img v-if="this.article.cover_image" :src="`${baseUrl}/storage/${this.article.cover_image}`" class="card-img-top" alt="">
                    <div v-else>No image</div>
                </div>
                <div class="ms_card_info_section d-flex justify-content-center">
                    <p>{{ this.article.description }}</p>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped lang="scss">
.ms_article_detail {
    padding-top: 120px;
    .starts_reviews i {
        color: var(--accent);
    }
    .starts_reviews small {
        font-family: 'Montserrat', sans-serif;
        padding: 0px 10px ;
    }
    .ms_img_section img {
        border-radius: 20px 0px 20px 0px;
    }
    .ms_card_info_section {
        flex-direction: column;
        align-items: center;
        p {
            padding: 30px 0px;
        }
    }
}

//MEDIA QUERY
// Medium devices (tablets, 768px and up)

@media (min-width: 768px) {
   .detail_view_mobile {
    display: flex;
    .ms_img_section {
        width: 50%;
    }
    .ms_card_info_section {
        width: 50%;
        align-items: start;
        padding: 0px 30px;
    }
   }
}

</style>