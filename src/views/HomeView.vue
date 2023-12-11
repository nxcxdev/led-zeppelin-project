<script setup lang="ts">
</script>

<template>
    <section class="Banner">
        <img src="../assets/led-zeppelin-hd.jpg" alt="">
    </section>
    <div class="Grid__Container">
        <img src="../assets/GALLERY.png" alt="img gallery">
        <img src="../assets/VIDEOS.png" alt="">
        <img src="../assets/SHOWS.png" alt="">
        <img src="../assets/HYSTORY.png" alt="">
        <img src="../assets/SHOP.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";


.Banner {
    width: 100%;

    img {
        width: 100%;
        object-fit: cover;
        height: 60vh;
        opacity: .8;
    }

    img:hover {
        opacity: 0.9;
    }
}

.Grid__Container {
    width: 100%;
    background-color: #2C2C2C;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,auto);
    gap: 1rem;
    grid-template-areas: 
        "gallery gallery videos shows"
        "history shop shop shows";

        :nth-child(1){
            grid-area: gallery;
        }
        :nth-child(2){
            grid-area: videos;
        }
        :nth-child(3){
            grid-area: shows;
        }
        :nth-child(4){
            grid-area: history;
        }
        :nth-child(5){
            grid-area: shop;
        }

        img {
            width: 100%;
            height: 100%;
        }
}
</style>