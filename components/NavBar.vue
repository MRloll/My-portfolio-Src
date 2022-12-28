<template lang="pug">
nav.bar
    .btns-wrapper.d-flex.justify-space-between
        nuxt-link(to="/") Walid Salah #[br] Front end Developer
        nav-buttons(:error="error").d-md-block.d-none
</template>

<script>
import NavButtons from "~/components/NavButtons.vue"
export default {
    name: "NavBar",
    components: {
        NavButtons,
    },
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
}
</script>
<style lang="scss" scoped>
body {
    nav.bar {
        width: 100%;
        padding: 20px 0;
        a {
            font-size: 22px;
            font-weight: 400;
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>
