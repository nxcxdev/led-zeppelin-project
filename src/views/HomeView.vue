
<script setup lang="ts">

</script>

<template>
    <section class="Banner">
        <img src="../assets/led-zeppelin-hd.jpg" alt="">
    </section>
    <div class="Grid__Container">
    <RouterLink class="Gallery__Img Flex" to="/gallery">Gallery</RouterLink>
    <RouterLink class="Videos__Img Flex" to="/videos">Videos</RouterLink>
    <RouterLink class="Shows__Img Flex" to="/shows">Shows</RouterLink>
    <RouterLink class="History__Img Flex" to="/history">History</RouterLink>
    <RouterLink class="Shop__Img Flex" to="/shop">Shop</RouterLink>
    
    </div>
    <Header />

</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.Banner {
    width: 100%;

    img {
        width: 100%;
        object-fit: cover;
        height: 55vh;
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
    grid-template-rows: repeat(2,250px);
    gap: 1rem;
    grid-template-areas: 
        "gallery gallery videos shows"
        "history shop shop shows";
        

        .Gallery__Img{         
            width: 100%;
            height: auto;
            background: linear-gradient(to bottom, rgb(0 0 0 / .1), rgb(0 0 0 / .1)), url(../assets/GALLERY.png);
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;
            grid-area: gallery;
        }

        .Videos__Img{      
            width: 100%;
            height: auto;
            background: url(../assets/VIDEOS.png);
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;
            grid-area: videos;
        }

        .Shows__Img{         
            width: 100%;
            height: auto;
            background: url(../assets/SHOWS.png);
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;
            grid-area: shows;
        }

        
        .History__Img{        
            width: 100%;
            height: auto;
            background: url(../assets/HYSTORY.png);
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;
            grid-area: history;
        }

        .Shop__Img{       
            width: 100%;
            height: auto;
            background: url(../assets/SHOP.png);
            background-size:cover;
            background-position: center;
            background-repeat: no-repeat;
            grid-area: shop;
        }

        .Flex{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .Gallery__Img:hover {
            background: linear-gradient(to bottom, rgb(0 0 0 / .5), rgb(0 0 0 / .5)), url(../assets/GALLERY.png);
        }
        .Videos__Img:hover {
            background: linear-gradient(to bottom, rgb(0 0 0 / .5), rgb(0 0 0 / .5)), url(../assets/VIDEOS.png);
        }
        .Shows__Img:hover {
            background: linear-gradient(to bottom, rgb(0 0 0 / .5), rgb(0 0 0 / .5)), url(../assets/SHOWS.png);
        }
        .History__Img:hover {
            background: linear-gradient(to bottom, rgb(0 0 0 / .5), rgb(0 0 0 / .5)), url(../assets/HYSTORY.png);
        }
        .Shop__Img:hover {
            background: linear-gradient(to bottom, rgb(0 0 0 / .5), rgb(0 0 0 / .5)), url(../assets/SHOP.png);
        }

        a {
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
        }
}
</style>