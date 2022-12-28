<template lang="pug">
div
    section.contact
        .contact-info.d-lg-flex.align-baseline
            h2.mb-5 connect with me
            .ml-10
                div(:class="{dark: !this.$vuetify.theme.dark}")
                    p If you want to team up or just chat, you can 
                        | #[a(href="mailto:walidelloll2018@gmail.com" class="underline") write me an email] or hit me up 
                        | via #[a(target="_blank" href="https://www.linkedin.com/in/walid-salah-b63631170/" class="underline") linked in].
                        | or text me on #[a(target="_blank" href="https://api.whatsapp.com/send?phone=01013817471" class="underline") wahtsApp] 
                        | and if you want to check my #[a(target="_blank" href="https://github.com/MRloll" class="underline") github, here is it].
                v-row.contact-icons.mt-10
                    v-col(cols="12" sm="6" md="4")
                        .wrapper
                            v-icon mdi-home-account 
                            span Mansoura, Daqahliya, Egypt
                    v-col(cols="12" sm="6" md="4")
                        .wrapper
                            a(target="_blank" href="https://api.whatsapp.com/send?phone=01013817471") 
                                v-icon mdi-whatsapp
                                |(02) 01013194797
                    v-col(cols="5"  sm="6" md="2")
                        .wrapper
                            a(href="mailto:walidelloll2018@gmail.com" ) 
                                v-icon mdi-email
                                | email
                    v-col(cols="6" sm="6" md="2")
                        .wrapper
                            a(target="_blank" href="https://github.com/MRloll") 
                                v-icon mdi-github
                                | github

</template>

<script>
export default {
    name: "ContactMe",
}
</script>

<style lang="scss" scoped>
.contact {
    padding-bottom: 200px;
    margin-top: 100px;
    h2 {
        min-width: 300px;
    }
    p {
        font-size: 30px;
    }
    span {
        margin-left: 10px;
    }
    a {
        text-decoration: none;
        color: inherit;
        i {
            margin-right: 10px;
        }
    }

    @media #{$minLarge} {
        p {
            font-size: 45px;
        }
    }
}
</style>
