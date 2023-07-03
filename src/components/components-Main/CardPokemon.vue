<script>
export default {
    data() {
        return {
            message: ""
        }
    },
    props: {
        name: String,
        type: String,
        number: Number,
        image: String,
        color: String
    },
    methods: {
        getClass(type) {
            switch (type) {
                case "Fire":
                    return this.message = "bg-red"
                    break;
                case "Grass":
                    return this.message = "bg-green"
                    break;
                case "Water":
                    return this.message = "bg-blue"
            }
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="my-card " :class="getClass(type)">
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

h5 {
    font-size: 17px;
}

img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.bg-green {
    background-color: #defde0;
}

.bg-red {
    background-color: #fddfdf;
}

.bg-blue {
    background-color: #def3fd;
}
</style>