<script>
const endpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons"
import axios from "axios";
import { store } from "./assets/data/store"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppLoader from "./components/AppLoader.vue"
import AppSelect from "./components/AppSelect.vue"
export default {
    data() {
        return {
            typeSearch: "",
            store,
        }
    },
    methods: {
        fetchPokemons(url) {
            axios.get(url).then(res => {
                store.isLoaded = false
                store.pokemonLists = res.data.docs
                store.isLoaded = true
            })
        },
        currentOption(optionSelected) {
            this.typeSearch = optionSelected
            if (this.typeSearch === "") {
                return this.fetchPokemons(endpoint)
            }
            const filterEndpoint = `${endpoint}?eq[type1]=${this.typeSearch}`;
            console.log(filterEndpoint)
            this.fetchPokemons(filterEndpoint);
        }
    },
    components: { AppMain, AppLoader, AppHeader, AppSelect },
    created() {
        this.fetchPokemons(endpoint)
    }
}
</script>

<template>
    <AppHeader />
    <AppSelect :options="store.options" @option="currentOption" />
    <AppMain />
    <AppLoader />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>