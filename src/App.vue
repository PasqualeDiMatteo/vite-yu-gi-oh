<script>
import AppMain from "./components/AppMain.vue"
export default {
    components: { AppMain }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="my-navbar my-5">
                <div class="circle big-circle blue-circle me-2"></div>
                <div class="circle small-circle red-circle  mx-2"></div>
                <div class="circle small-circle yellow-circle  mx-2"></div>
                <div class="circle small-circle green-circle  mx-2"></div>
            </div>
            <AppMain />
        </div>
    </header>
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>