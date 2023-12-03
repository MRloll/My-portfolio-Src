<template lang="pug">
div
    v-container
        NavBar
        .my-prtofolio.text-center
            h2 Welcome to my Portfolio
            .cards.row.align-content-center(dir="rtl")
                v-col.card(
                    v-for="website of websites",
                    :key="website.name",
                    :alt="website.name",
                    lg="3",
                    md="4",
                    sm="6",
                    cols="12"
                )
                    a(:href="website.preview", target="_blank")
                        .img-wrapper
                            v-img(:src="`${website.src}`")
                                template(v-slot:placeholder)
                                    v-row.fill-height.ma-0(
                                        align="center",
                                        justify="center"
                                    )
                                        v-progress-circular(
                                            indeterminate,
                                            color="white"
                                        )
                        .img-info.mt-5.d-flex.justify-space-around
                            v-btn(
                                :href="website.github",
                                target="_blank",
                                rounded,
                                v-if="website.github"
                            )
                                v-icon.mr-3 mdi-github
                                | GitHub
                            v-btn(
                                :href="website.preview",
                                target="_blank",
                                rounded
                            )
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
                    src: require("@/assets/imgs/zakaa.png"),
                    name: "Zakaa wep app",
                    github: null,
                    preview: "https://hdiit.edu.sa/zakaa/",
                },

                {
                    src: require("@/assets/imgs/meem.png"),
                    name: "Meem wep app",
                    github: null,
                    preview: "https://walid.azq1.com/meem/",
                },

                {
                    src: require("@/assets/imgs/live-game.png"),
                    name: "Live game",
                    github: null,
                    preview: "https://mrloll.github.io/live-game/",
                },
                {
                    src: require("@/assets/imgs/vida.png"),
                    name: "Vida LMS",
                    github: null,
                    preview: "https://vida-ksa.com/",
                },
                {
                    src: require("@/assets/imgs/adam.png"),
                    name: "Adaam wep app",
                    github: null,
                    preview: "https://walid.azq1.com/adam/",
                },
                {
                    src: require("@/assets/imgs/stardom.png"),
                    name: "Stardom turkish university",
                    github: null,
                    preview: "https://stardomuniversity.org/en/",
                },
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
                    src: require("@/assets/imgs/mogo.png"),
                    name: "mogo",
                    github: "https://github.com/MRloll/Mogo-website",
                    preview: "https://mrloll.github.io/Mogo-website/#",
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
            a {
                text-decoration: none;
            }
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
            }
            .img-info {
                position: relative;
                z-index: 1;
                transform: translateY(-70px);
                opacity: 0;
                transition: all 0.7s ease-in-out;
            }
            &:hover {
                .img-info {
                    transform: translateY(0px);
                    opacity: 100%;
                }
            }
        }
    }
}
</style>
