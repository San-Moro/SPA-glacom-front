<script>
export default {
    name: 'HomePage',
}
</script>

<template>
    <div class="ms_wrapper d-flex">
        <div class="left_side d-flex justify-content-center align-items-center">
            <div class="newsletter_card d-flex justify-content-center align-items-center p-3 mt-5">
                <h3>Sign up for our News Letter</h3>
                <a class="btn_home mt-4" href="#">Sign up</a>
            </div>
        </div>
        <div class="right_side">
            <div class="animated_page d-flex justify-content-center align-items-center p-3">
                <div class="animated_page_content">
                    <h2>latest new item</h2>
                    <a class="btn_home mt-4" href="#">Read Now</a>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_wrapper {
    width: 100vw;
    height: 100vh;
    background-color: var(--accent);
    flex-direction: column;
    .left_side {
        width: 100%;
        height: 40%;
        background-color: var(--accent);
        .newsletter_card {
            width: 40%;
            flex-direction: column;
            background-color: var(--accent);
            text-align: center;
            border-radius: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 2px 2px 20px 2px rgba(0, 0, 0, 0.08);
        }
    }
    .right_side {
        width: 100%;
        height:60%;
        .animated_page {
            width: 100%;
            height: 100%;
            background-color: var(--primary);
            border-radius: 20px 20px 0px 0px;
            position: relative;
            animation-duration: 2s;
            animation-timing-function: ease;
            animation-name: slidein;
            @keyframes slidein {
                from {
                    margin-top: 100%;
                    width: 300%;
                }

                to {
                    margin-top: 0%;
                    width: 100%;
                }
            }

            .animated_page_content {
                width: 80%;
                margin: 0 auto;
                text-align: center;
                h2 {
                    color: var(--secondary);
                    font-size: 65px;
                    font-family: 'Yeseva One', cursive;
                    margin-bottom: 30px;
                }
            }
        }
    }
}
//MEDIA QUERY
// Medium devices (tablets, 768px and up)

@media (min-width: 768px) {
    .ms_wrapper{
        flex-direction: row;
        .left_side {
        width: 40%;
        height: 100%;
        background-color: var(--accent);
        .newsletter_card {
            width: 50%;
            height: 180px;
        }
    }
    .right_side {
        width: 60%;
        height: 100%;
        .animated_page {
            width: 100%;
            height: 100%;
            background-color: var(--primary);
            border-radius: 20px 0px 0px 20px;
            position: relative;
            animation-duration: 2s;
            animation-timing-function: ease;
            animation-name: slidein;
            @keyframes slidein {
                from {
                    margin-left: 100%;
                    width: 300%;
                }

                to {
                    margin-left: 0%;
                    width: 100%;
                }
            }

            .animated_page_content {
                width: 80%;
                margin: 0 auto;
                text-align: center;
                h2 {
                    color: var(--secondary);
                    font-size: 65px;
                    font-family: 'Yeseva One', cursive;
                    margin-bottom: 30px;
                }
            }
        }
    }
    }
    
}

</style>