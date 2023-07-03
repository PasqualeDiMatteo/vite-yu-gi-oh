<script>
import CardPokemon from "./CardPokemon.vue"
export default {
    components: { CardPokemon }
}
</script>

<template>
    <div class="background p-3">
        <div class="row row-cols-5 g-3">
            <CardPokemon />
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