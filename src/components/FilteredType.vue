<script>
export default {
    data() {
        return {
            optionSelected: ""
        }
    },
    props: {
        options: Array,
        defaultLabel: String
    },
    emits: ["option"]
}
</script>
<template>
    <div class="container mb-2 d-flex justify-content-end">
        <select class="form-select" v-model="optionSelected" @change="$emit('option', optionSelected)">
            <option selected value="">{{ defaultLabel || "" }}</option>
            <option :value="option" v-for="option in options">{{ option }}</option>
        </select>
    </div>
</template>
<style scoped lang="scss">
select {
    width: 200px;
}
</style>