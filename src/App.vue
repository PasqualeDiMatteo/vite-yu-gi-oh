<script>
const endpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons"
import axios from "axios";
import { store } from "./assets/data/store"
import AppMain from "./components/AppMain.vue"
import AppLoader from "./components/AppLoader.vue"
export default {
    components: { AppMain, AppLoader },
    mounted() {
        axios.get(endpoint).then(res => {
            store.isLoaded = false
            store.pokemonLists = res.data.docs
            store.isLoaded = true
        })
    }
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
        </div>
    </header>
    <AppMain />
    <AppLoader />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>