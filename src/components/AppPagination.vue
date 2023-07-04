<script>
export default {
    data() {
        return {
        }
    },
    props: {
        toNextPage: Number,
        toPrevPage: Number,
    },
    emits: ["clicked-prev", "clicked-next"]
}
</script>
<template>
    <nav class="d-flex justify-content-center mt-3">
        <ul v-if="toNextPage || toPrevPage" class="pagination">
            <li class="page-item" @click="$emit('clicked-prev')" :class="{ 'disabled': !toPrevPage }">
                <button class="page-link">Previous</button>
            </li>
            <li class="page-item" @click="$emit('clicked-next')" :class="{ 'disabled': !toNextPage }">
                <button class="page-link">Next</button>
            </li>
        </ul>
    </nav>
</template>
<style scoped lang="scss">
.disabled {
    background-color: grey;
    cursor: not-allowed;
}
</style>