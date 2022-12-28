<template>
    <v-app dark>
        <v-container>
            <navBar :error="error" />
            <div class="error-container">
                <p>Oops!</p>
                <p>Someting went wrong</p>
                <h1 v-if="error.statusCode === 404">
                    {{ pageNotFound }}
                </h1>
                <h1 v-else>
                    {{ otherError }}
                </h1>
                <v-btn to="/">Go back to home</v-btn>
            </div>
        </v-container>
    </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
    name: "EmptyLayout",
    components: {
        NavBar,
    },
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            pageNotFound: "404 Page Not Found",
            otherError: "An error occurred",
            showButtons: true,
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        return {
            title,
        }
    },
}
</script>

<style scoped lang="scss">
h1 {
    font-size: 3rem;
}
.error-container {
    font-size: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
}
</style>
