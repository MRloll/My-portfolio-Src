<!-- <template>
    <div v-if="loading" class="wrapper">
        <span class="loader"></span>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false,
    }),
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()

            setTimeout(() => {
                this.$nuxt.$loading.finish()
            }, 4000)
        })
    },
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        },
    },
}
</script>

<style scoped lang="scss">
.wrapper {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: $main-color;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader {
    position: absolute;
    width: 100px;
    height: 100px;
    z-index: 10;
}

.loader:before,
.loader:after {
    content: "";
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
}
.loader:after {
    box-shadow: 0 2px 0 #ff3d00 inset;
    animation: rotate 2s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style> -->
