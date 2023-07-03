<script>
export default {
    props: {
        name: String,
        type: String,
        number: Number,
        image: String,
    }
}
</script>

<template>
    <div class="col">
        <div class="my-card  ">
            <div class="image-pokemon d-flex justify-content-center pt-3">
                <img :src="image" :alt="name" class="img-fluid">
            </div>
            <div class="info-pokemon text-center">
                <div class="number-pokedex">{{ number }}</div>
                <h5>{{ name }}</h5>
                <div class="type">{{ type }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.my-card {
    background-color: white;
    border-radius: 15px;
    height: 100%;
}

img {
    width: 120px;
    border-radius: 50%;
}
</style>