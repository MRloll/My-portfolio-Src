export default ({ app }) => {
    const theme = localStorage.getItem("dark")
    // console.log(app.$vuetify)
    console.log(theme)
    app.context.$vuetify.theme.dark = theme === "false"
}
