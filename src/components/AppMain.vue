<script>
import DisplayPokedex from "./components-Main/DisplayPokedex.vue"
export default {
    components: { DisplayPokedex }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="pokédex">
                <DisplayPokedex />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.pokédex {
    background-color: #dedede;
    height: 500px;
    border-radius: 20px;
    padding: 40px 20px;
}
</style>