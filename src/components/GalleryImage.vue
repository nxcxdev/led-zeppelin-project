<template>
    <article class="gallery__photo">
        <img src="" alt="">
        <div class="photo__footer">
            <p>Photo footer</p>
            <p>Date</p>
        </div>
    </article>
</template>
<style scoped lang="scss">
@import '../assets/styles.scss';
.gallery__photo {
    height: 30rem;
    background-color: white;
}
.photo__footer {
    background-color: $secondary--color;
    height: 5rem;
}
</style>