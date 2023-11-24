<script setup lang="ts"></script>
<template>
    <header>
        <img src="../assets/LOGO.png" alt="Led Zepelin image">
        <nav>
        <RouterLink class="routerlink" to="../views/HomeView.vue">Home</RouterLink>    
        <RouterLink class="routerlink" to="../views/GalleryView.vue">Gallery</RouterLink>    
        <RouterLink class="routerlink" to="../views/VideoView.vue">Videos</RouterLink>    
        <RouterLink class="routerlink" to="../views/ShowsView.vue">Shows</RouterLink>    
        <RouterLink class="routerlink" to="../views/ShopView.vue">Shop</RouterLink>    
        <RouterLink class="routerlink" to="../views/HistoryView.vue">History</RouterLink>    
        </nav>
    </header>
</template>


<style lang="scss" scoped>

@import "../assets/styles.scss";

header {
    display: flex;
    align-items: center;

    nav {
        margin-left: 3rem;
        display: flex;
        justify-content: space-around;
        width: 30%;

        .routerlink {
            text-decoration: none;
            color: black;
            font-size: 1.5rem;
            margin-left: 1.5rem;
        }
    }
}

</style>