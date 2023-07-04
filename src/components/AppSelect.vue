<script>
export default {
    data() {
        return {
            optionSelected: ""
        }
    },
    props: {
        options: Array
    },
    emits: ["option"]
}
</script>
<template>
    <div class="container mb-5">
        <select class="form-select" v-model="optionSelected" @change="$emit('option', optionSelected)">
            <option selected value="">---</option>
            <option :value="option" v-for="option in options">{{ option }}</option>
        </select>
    </div>
</template>
<style scoped lang="scss">
select {
    width: 500px;
}
</style>