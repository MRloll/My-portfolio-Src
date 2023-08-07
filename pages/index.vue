<template lang="pug">
div
    HeaderIntro
    v-container
        section.exe-wrapper
            .experience.d-lg-flex.align-baseline
                h2.mb-5 experience
                ul.wrapper
                    li #[v-icon mdi-check-circle] #[p ( 2020 - 2021 ) +1 year remote and freelancer Front end Developer]
                    li #[v-icon mdi-check-circle] #[p Created responsive web applications Using JavaScript, HTML, and CSS, bootstrap, vue.js, nuxt.js, vuetify ,etc .]
                    li #[v-icon mdi-check-circle] #[p Conceived and built optimized landing pages in HTML5 and CSS3, Vue.js includingintegration and cross-browser compatibility, to support marketing]
                    li #[v-icon mdi-check-circle] #[p Collaborated with in-house web designers to create sleek and innovative UI design.]
                    li #[v-icon mdi-check-circle] #[p Accurately translate user and business needs into functional frontend code Job Requirements.]
                    li #[v-icon mdi-check-circle] #[p Implement static web user interfaces based on the provided visuals, combining them with front-end dynamic presentation technologies (Javascript frameworks).]
                    li #[v-icon mdi-check-circle] #[p Assure that all user input is validated before submitting to back-end.]
                    .exe-wrapper
            .experience.d-lg-flex.align-baseline
                h2.mb-5 experience
                ul.wrapper
                    li #[v-icon mdi-check-circle] #[p ( Jan 2023 - present ) working as full time Vuejs developer at #[a(href="https://elryad.com/ar/" target="_blank" class="underline") Elryad company for web design ] ]
                    li #[v-icon mdi-check-circle] #[p develping web apps for Learning managment systems using vue.js, nuxt.js, vuetify ,etc .]
                    li #[v-icon mdi-check-circle] #[p Collaborate with backend developers and and integrate REST apis in the wep apps]
                    li #[v-icon mdi-check-circle] #[p Implement, debug, configure, build, deploy and test applications. ]
                    li #[v-icon mdi-check-circle] #[p Full access to the clinets meetings and Accurately translate user and business needs into functional frontend code Job Requirements.]
                    li #[v-icon mdi-check-circle] #[p Develop and maintain web and cross-platform applications using HTML, CSS, JavaScript and related technologies.]
                    li #[v-icon mdi-check-circle] #[p Implement clean, modern, smooth animations and transitions that provide an excellent user experience]
                    .exe-wrapper

            .qualifications.d-lg-flex.align-baseline
                h2.mb-5 qualifications
                ul.wrapper
                    li #[v-icon mdi-check-circle] #[p Knowledge of modern development tools, like Git]
                    li #[v-icon mdi-check-circle] #[p Proficiency in JavaScript language, including its syntax and features.]
                    li #[v-icon mdi-check-circle] #[p Strong understanding of the Vue.js framework and its core principles]
                    li #[v-icon mdi-check-circle] #[p Familiarity with the Vue.js ecosystem. (Vuex, VueRouter)]
                    li #[v-icon mdi-check-circle] #[p Knowledge of server-side rendering.]
                    li #[v-icon mdi-check-circle] #[p Ability to write efficient, secure, clean, and scalable JavaScript code.]
                    li #[v-icon mdi-check-circle] #[p Good knowlege of Nuxtjs initutive vue framwork and Vuetify the Material Component Framework for Vue]
        section.techno.text-center
            h2 technologies
            v-row
                v-col( lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-language-html5
                        p Html5
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-language-css3
                        p css3
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-bootstrap
                        p bootstrap
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-language-javascript
                        p javascript
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-sass
                        p sass
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-jquery
                        p jquery
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-vuejs
                        p vuejs
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-vuetify
                        p vuetify
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-nuxt
                        p nuxtJs
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-git
                        p git
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-github
                        p github
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        v-icon mdi-code-json
                        p json
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        p pug
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        p ajax
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        p Axios
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        p ES6
                v-col(lg="2" md="3" sm="4" cols="6")
                    .wrapper(v-ripple)
                        p vue3
        ContactMe
</template>

<script>
import HeaderIntro from "@/components/HeaderIntro.vue"
import ContactMe from "@/components/ContactMe.vue"
export default {
    name: "IndexPage",
    components: {
        HeaderIntro,
        ContactMe,
    },
    head() {
        return {
            title: "Home",
        }
    },
}
</script>

<style lang="scss" scoped>
.d-block {
    display: block;
}
section {
    padding: 100px 0;
}

section.exe-wrapper {
    .qualifications {
        margin-top: 100px;
    }
    .qualifications,
    .experience {
        padding-top: 50px;
        ul {
            list-style-type: none;
            font-size: 22px;
            li {
                display: flex;
                align-items: baseline;
                margin-bottom: 10px;
                p {
                    margin: 0;
                    margin-left: 10px;
                }
                a {
                    text-decoration: none;
                    margin: 0 5px;
                    color: inherit;
                }
            }
        }
        @media #{$minLarge} {
            li {
                font-size: 27px;
            }
        }
    }
}

section.techno {
    h2 {
        margin-bottom: 50px;
    }
    .wrapper {
        margin: auto;
        font-size: 30px;
        border: 1px solid #ffffff47;
        border-radius: 24px;
        transition: all 1s ease;
        height: 180px;
        cursor: pointer;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        align-content: center;
        i {
            width: 100%;
            font-size: 30px !important;
        }
        &:hover {
            border-color: #fff;
        }
    }
}
</style>
