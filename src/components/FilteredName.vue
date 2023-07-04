<script>
export default {
    data() {
        return {
            searchTerm: ""
        }
    },
    emits: ["searchTerm"]
}
</script>
<template>
    <div class="container mb-3">
        <input type="text" class="form-control" placeholder="Cerca..." v-model="searchTerm"
            @keyup.enter="$emit('searchTerm', searchTerm)">
    </div>
</template>
<style scoped lang="scss"></style>