<template lang="pug">
div(:class="{dark: !this.$vuetify.theme.dark}")
    v-btn(
        outlined
        plain
        class="ma-2 nav-btn"
        href="mailto:walidelloll2018@gmail.com"
        )
        | Email
    v-btn(
        outlined
        plain
        class="ma-2 nav-btn"
        target="_blank" href="https://www.linkedin.com/in/walid-salah-b63631170/"
        )
        | Linked In
    v-btn(
        outlined
        plain
        class="ma-2 nav-btn"
        :to="routerName.path"
        )
        | {{routerName.name}}
    v-btn(
        outlined
        plain
        class="ma-2 nav-btn theme-toggle"
        @click="toggleTheme"
        )
        v-icon {{this.$vuetify.theme.dark ? "mdi-weather-night" : "mdi-white-balance-sunny"}}

</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    computed: {
        routerName() {
            if (this.error) {
                if (this.error.statusCode === 404) {
                    return { path: "/", name: "Home" }
                }
            }
            return this.$route.path === "/Myportfolio"
                ? { path: "/", name: "Home" }
                : { path: "Myportfolio", name: "Portfolio" }
        },
    },
    methods: {
        toggleTheme() {
            localStorage.setItem("dark", this.$vuetify.theme.dark)
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
    },
}
</script>

<style lang="scss" scoped>
div {
    .nav-btn {
        height: 60px !important;
        border: 2px solid;
        border-radius: 999px;
        font-size: 20px;
        font-weight: 400;
        transition: background-color 0.25s, color 0.25s;
        &.theme-toggle {
            width: 60px;
            height: 60px;
        }
        &:hover {
            background-color: $main-color;
            color: $sec-color;
        }
    }
    &.dark {
        .nav-btn:hover {
            background-color: $sec-color;
            color: $main-color;
        }
    }
}

.bottom {
    overflow: hidden;
    opacity: 0;
    border-radius: 999px;
    background-color: $main-color;
    z-index: 10;
    position: fixed;
    bottom: -100px;
    left: 50%;
    transform: translate(-50%) scale(0.7);
    transition: all 0.5s cubic-bezier(0.25, 1, 0.25, 1);
    .nav-btn {
        border: none;
        color: $sec-color;
        height: 40px !important;
        &:hover {
            color: #1a1917;
        }
    }
    &.dark-nav {
        background-color: $sec-color;
        .nav-btn {
            color: $main-color;
            border: none;
            &:hover {
                background-color: $sec-color;
            }
        }
    }
    @media #{$maxMobile} {
        .nav-btn {
            padding: 27px 12px;
            font-size: 17px;
            margin: 0 !important;
            &.theme-toggle {
                width: 47px;
                min-width: 0;
            }
        }
    }
}

.shown {
    transform: translate(-50%) scale(1);
    bottom: 50px;
    opacity: 1;
}
</style>
