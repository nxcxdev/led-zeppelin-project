<script setup lang="ts">

</script>


<template>
    <article>
        <h2>Gallery</h2>
        <section class="Container__Grid__Section__gallery">
            <div><img src="../assets/gallery1.png" alt=""></div>
            <div><img src="../assets/gallery2.png" alt=""></div>
            <div><img src="../assets/gallery3.png" alt=""></div>
            <div><img src="../assets/gallery4.png" alt=""></div>
            <div><img src="../assets/gallery5.png" alt=""></div>
            <div><img src="../assets/gallery6.png" alt=""></div>
        </section>
    </article>

</template>


<style lang="scss" scoped>
@import "../assets/styles.scss";

article {
    background-color: #2C2C2C;

    h2 {
        width: 100%;
        font-size: 2rem;
        color: white;
        padding-bottom: 1rem;
    }

    .Container__Grid__Section__gallery {
        gap: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
        align-items: center;


        img {
            padding-left: 2rem;
            width: 90%;
        }
    }    
}
</style>