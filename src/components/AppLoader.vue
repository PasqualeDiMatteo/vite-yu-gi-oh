<script>
import { store } from "../assets/data/store"
export default {
    data() {
        return {
            store: store
        }
    }
}
</script>

<template>
    <div class="overlay text-center" v-if="!store.isLoaded">
        <div class="message-loading">Loading...</div>
        <FontAwesomeIcon icon="'fas fa-circle-notch" class="fa-8x fa-spin" />
    </div>
</template>

<style scoped>
.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.message-loading {
    color: white;
    margin-bottom: 10px;
    font-size: 30px;
}

.fa-spin {
    color: white;
}
</style>
