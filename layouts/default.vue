<template lang="pug">
v-app(dark)
    nav-buttons.bottom.d-flex(:class="{shown : showBottomNav, 'dark-nav' : !this.$vuetify.theme.dark}")
    Transition(name="slide-fade")
        v-main
            Nuxt
</template>

<script>
import NavButtons from "~/components/NavButtons.vue"
export default {
    name: "DefaultLayout",
    components: {
        NavButtons,
    },
    data() {
        return {
            showBottomNav: false,
        }
    },
    mounted() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                this.showBottomNav = true
            } else {
                this.showBottomNav = false
            }
        })
    },
}
</script>
