<script>
export default {

}
</script>

<template>
    <header>
        <div class="container">
            <div class="my-navbar my-3">
                <div class="circle big-circle blue-circle me-2"></div>
                <div class="circle small-circle red-circle  mx-2"></div>
                <div class="circle small-circle yellow-circle  mx-2"></div>
                <div class="circle small-circle green-circle  mx-2"></div>
            </div>
        </div>
    </header>
</template>
<style scoped lang="scss">
.circle {
    border-radius: 50%;
}

.big-circle {
    width: 100px;
    height: 100px;
    border: 5px solid white;
}

.small-circle {
    width: 50px;
    height: 50px;
    border: 3px solid white;

}

.blue-circle {
    background-image: linear-gradient(128deg, #ffffff 10%, #0000ff 70%);

}

.red-circle {
    background-image: linear-gradient(128deg, #ffffff 10%, #ff0000 70%);
}

.yellow-circle {
    background-image: linear-gradient(128deg, #ffffff 10%, #ffff00 70%);
}

.green-circle {
    background-image: linear-gradient(128deg, #ffffff 10%, #008000 70%);
}
</style>