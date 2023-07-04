<script>
const endpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons"
import axios from "axios";
import { store } from "./assets/data/store"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppLoader from "./components/AppLoader.vue"
export default {
    components: { AppMain, AppLoader, AppHeader },
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
    <AppHeader />
    <AppMain />
    <AppLoader />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>