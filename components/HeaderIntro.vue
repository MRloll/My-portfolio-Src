<template lang="pug">
header
    v-container.d-flex.align-content-space-between.flex-wrap
        NavBar.animate-nav
        .intro
            h1(:class="{dark: !this.$vuetify.theme.dark}") Hi there my name is 
                div <span class="underline">Walid Salah.</span><img src="../assets/imgs/my_pic.jpg"/>
                |<br/>I'm front end 
                div <span class="underline"> web developer,</span><img src="../assets/imgs/web.jpg"/>
                |and i am based in 
                div <span class="underline">Egypt</span><img src="../assets/imgs/pyramids.jpg"/>
        .header-bottom.d-flex.flex-wrap.align-end.justify-space-between.pb-5
            v-icon.icon mdi-arrow-down
            .time {{time}}



</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
    name: "HeaderIntro",
    components: {
        NavBar,
    },
    data() {
        return {
            time: null,
        }
    },
    mounted() {
        setInterval(this.updateTime, 1000)
    },
    methods: {
        updateTime() {
            const currentTime = new Date()
            const hours =
                currentTime.getHours() < 10
                    ? "0" + currentTime.getHours()
                    : currentTime.getHours()
            let minutes = currentTime.getMinutes()
            if (minutes < 10) {
                minutes = "0" + minutes
            }
            let timeStr = hours + ":" + minutes + " "
            if (hours > 11) {
                timeStr += "PM"
            } else {
                timeStr += "AM"
            }
            this.time = timeStr
        },
    },
}
</script>

<style lang="scss" scoped>
header {
    position: relative;
    height: 100vh;
    min-height: 100vh;
    .container {
        height: 100%;
    }
    .intro {
        h1 {
            line-height: 2.3;
            div {
                display: inline-block;
                span {
                    position: relative;
                    cursor: pointer;
                }
                img {
                    cursor: pointer;
                    width: 73px;
                    margin-right: 10px;
                    margin-left: 10px;
                    margin-bottom: -32px;
                    border-radius: 50%;
                    transition: transform 0.4s ease;
                }
                &:hover {
                    img {
                        transform: scale(3.4);
                    }
                }
            }
            &.dark {
                span {
                    box-shadow: inset 0 -0.0625em 0 rgb(26 25 23 / 50%);
                }
                div:hover span {
                    box-shadow: inset 0 -0.0625em 0 #333;
                }
            }
            @media #{$minMedium} {
                font-size: 3rem;
            }
            @media (min-width: 1300px) {
                font-size: 4.5rem;
            }
        }
    }

    .header-bottom {
        width: 100%;
        .icon {
            font-size: 30px;
        }
    }
}
</style>
