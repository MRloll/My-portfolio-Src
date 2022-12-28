<template lang="pug">
div
    v-container
        NavBar
        .my-prtofolio.text-center
            h2  Welcome to my Portfolio
            .cards.row.align-content-center
                v-col.card(v-for="website of websites" :key="website.name" :alt="website.name" lg="3" md="4" sm="6" cols="12")
                    .img-wrapper(:style="{'background-image': `url(${website.src})`}")
                    .img-info.mt-5.d-flex.justify-space-around
                        v-btn(:href="website.github" target="_blank" rounded ) 
                            v-icon.mr-3 mdi-github
                            | GitHub 
                        v-btn(:href="website.preview" target="_blank" rounded) 
                            v-icon.mr-3 mdi-eye-arrow-right
                            | Preview
        ContactMe
        
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import ContactMe from "@/components/ContactMe.vue"
export default {
    name: "MyPortfoliio",
    components: {
        NavBar,
        ContactMe,
    },
    transition: "",
    data() {
        return {
            websites: [
                {
                    src: require("@/assets/imgs/basic-app.png"),
                    name: "basic-app",
                    github: "https://github.com/MRloll/basic_app_src",
                    preview: "https://mrloll.github.io/",
                },
                {
                    src: require("@/assets/imgs/king-faisal.png"),
                    name: "king-faisal",
                    github: "https://github.com/MRloll/king-faisal-uni",
                    preview: "https://mrloll.github.io/king-faisal-uni/",
                },
                {
                    src: require("@/assets/imgs/barebery.png"),
                    name: "barebery",
                    github: "https://github.com/MRloll/Barebary",
                    preview: "https://jhasdasldkhasld.000webhostapp.com/#/",
                },
                {
                    src: require("@/assets/imgs/coursentelli.png"),
                    name: "coursentelli",
                    github: "https://github.com/MRloll/Coursentelli-New-Pages",
                    preview: "https://courseintelli.com/",
                },
                {
                    src: require("@/assets/imgs/edugate.png"),
                    name: "edugate",
                    github: "https://github.com/MRloll/Edu-Gate",
                    preview: "https://mrloll.github.io/Edu-Gate/",
                },
                {
                    src: require("@/assets/imgs/mogo.png"),
                    name: "mogo",
                    github: "https://github.com/MRloll/Mogo-website",
                    preview: "https://mrloll.github.io/Mogo-website/#",
                },
                {
                    src: require("@/assets/imgs/wakklny.png"),
                    name: "wakklny",
                    github: "https://github.com/MRloll/wakklny",
                    preview: "https://mrloll.github.io/wakklny/",
                },
                {
                    src: require("@/assets/imgs/bluedolphin.png"),
                    name: "bluedolphin",
                    github: "https://github.com/MRloll/bluedolphin",
                    preview: "https://mrloll.github.io/bluedolphin/index.html",
                },
                {
                    src: require("@/assets/imgs/tinker.png"),
                    name: "tinker",
                    github: "https://github.com/MRloll/Tinker-Website",
                    preview: "https://mrloll.github.io/Tinker-Website/#",
                },
            ],
        }
    },
    head() {
        return {
            title: "Portfolio",
        }
    },
}
</script>

<style lang="scss" scoped>
.my-prtofolio {
    h2 {
        margin: 100px 0;
        font-size: 3rem;
    }
    .cards {
        .card {
            width: 400px;
            height: 579px;
            cursor: pointer;
            overflow: hidden;
            padding: 10px;
            .img-wrapper {
                overflow: hidden;
                position: relative;
                z-index: 2;
                border-radius: 24px;
                height: 500px;
                box-shadow: 0 0 7px -1px;
                transition: background-position-y 3s ease-in-out;
                background-size: cover;
                background-position-y: 0%;
            }
            .img-info {
                position: relative;
                z-index: 1;
                transform: translateY(-70px);
                opacity: 0;
                transition: all 0.7s ease-in-out;
            }
            &:hover {
                .img-wrapper {
                    background-position-y: 100%;
                }
                .img-info {
                    transform: translateY(0px);
                    opacity: 100%;
                }
            }
        }
    }
}
</style>
