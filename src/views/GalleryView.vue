<script setup lang="ts">
import GalleryImage from '../components/GalleryImage.vue'
</script>
<template>
    <main>
        <h2>GALLERY</h2>
        <div id="gallery__container">
            <article class="gallery__photo">
                <img src="" alt="">
                <div class="photo__footer">
                <p>Photo footer</p>
                <p>Date</p>
                </div>
            </article>

        </div>
    </main>
</template>
<style lang="scss">
@import "../assets/styles.scss";
main {
    background-color: $primary--color;
}

#gallery__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7rem;
    padding: 7rem;
    }
</style>