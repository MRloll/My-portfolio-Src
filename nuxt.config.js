// import colors from 'vuetify/es5/util/colors'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    ssr: false,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - Walid Salah',
        title: 'Walid Salah',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Front End Web Devoloper Walid Salah' },
            { name: 'format-detection', content: 'telephone=yes' },
            { name: "keywords", content: "web, devolopment, code, front end, ui, ux, developer"},
            { name: "viewport", content: "width=device-width, initial-scale=1.0"},
            {name: "og:image", content: "~/assets/imgs/my_pic.jpg"}

        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    // loading :"~/components/LoadingIndicator.vue",
 
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/main.scss'],
    pageTransition: {
        name: "page"
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        theme: {
            dark: true,
            options: {
                customProperties: true,
            },          
            themes: {
                dark: {
                    background: "#1a1917",
                },
                light: {
                    background: "#e5e4df"
                }
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: null
    }
    
}
