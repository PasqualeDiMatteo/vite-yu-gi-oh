<script>
import CardPokemon from "./CardPokemon.vue"
import { store } from "../../assets/data/store"
export default {
    components: { CardPokemon },
    data() {
        return { store }
    }
}
</script>

<template>
    <div class="background p-3">
        <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-3">
            <CardPokemon v-for="pokemon in store.pokemonLists" :name="pokemon.name" :type="pokemon.type1"
                :number="pokemon.number" :image="pokemon.imageUrl" :color="pokemon.color" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.background {
    background-color: #797d81;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}
</style>