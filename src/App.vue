<script>
const endpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons"
const endpointType = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1"



import axios from "axios";
import { store } from "./assets/data/store"
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppLoader from "./components/AppLoader.vue"
import FilteredType from "./components/FilteredType.vue"
import FilteredName from "./components/FilteredName.vue"
import AppPagination from "./components/AppPagination.vue"


export default {
    data() {
        return {
            typeSearch: "",
            nameSearch: "",
            prevPage: 0,
            nextPage: 0,
            store,
        }
    },
    methods: {
        fetchTypes(url) {
            axios.get(url).then(res => {
                store.options = res.data
            })
        },
        fetchPokemons(url) {
            axios.get(url).then(res => {
                store.isLoaded = false
                store.pokemonLists = res.data.docs
                store.isLoaded = true
                this.nextPage = res.data.nextPage
                this.prevPage = res.data.prevPage
            })
        },
        currentOption(optionSelected) {
            this.typeSearch = optionSelected
            if (this.typeSearch === "") {
                return this.fetchPokemons(endpoint)
            }
            const filterEndpoint = `${endpoint}?eq[type1]=${this.typeSearch}`;
            this.fetchPokemons(filterEndpoint);
        },
        searchName(searchTerm) {
            this.nameSearch = searchTerm
            const filterEndpoint = `${endpoint}?q[name]=${this.nameSearch}`;
            this.fetchPokemons(filterEndpoint);
        },
        goToPrev() {
            if (this.prevPage === null) return
            const prevPage = `${endpoint}?page=${this.prevPage}`;
            this.fetchPokemons(prevPage);
        },
        goToNext() {
            if (this.nextPage === null) return
            const nextPage = `${endpoint}?page=${this.nextPage}`;
            this.fetchPokemons(nextPage);
        }
    },
    components: { AppMain, AppLoader, AppHeader, FilteredType, FilteredName, AppPagination },
    created() {
        this.fetchPokemons(endpoint)
        this.fetchTypes(endpointType)
    }
}
</script>

<template>
    <AppHeader />
    <FilteredType :options="store.options" @option="currentOption" />
    <FilteredName @searchTerm="searchName" />
    <AppMain />
    <AppPagination @clicked-next="goToNext()" @clicked-prev="goToPrev()" :toPrevPage="prevPage" :toNextPage="nextPage" />
    <AppLoader />
</template>

<style lang="scss">
@use "./assets/scss/style.scss" as *;
</style>