<script setup lang="ts">
</script>


<template>
    <article>
        <h2>History</h2>
        <p>Welcome to a sonic journey through the legendary career of Led Zeppelin – the iconic rock band that rewrote the rules of music and left an indelible mark on the history of rock and roll. From their explosive formation in the late 1960s to their groundbreaking albums and unforgettable live performances, Led Zeppelin's impact on the musical landscape is immeasurable. Join us as we unravel the tale of four musical virtuosos – Robert Plant, Jimmy Page, John Paul Jones, and John Bonham – whose collective genius forged a sound that continues to resonate across generations. This is the story of Led Zeppelin, a band whose thunderous riffs, soulful vocals, and genre-defying creativity have made them eternal titans in the pantheon of rock music.</p>
        <div class="Container__Phrase__And_Img">
            <div class="Container__Phrase">
                <h3>Debut</h3>
                <p>Led Zeppelin's eponymous debut album, released on January 12, 1969, marked the seismic entry of a musical force that would shape the landscape of rock for decades to come. Comprised of nine tracks, the album showcased the band's unparalleled chemistry and their ability to seamlessly blend blues, rock, and folk influences into a genre-defying sound.</p>
            </div>
            <img src="../assets/img_shop5.png" alt="">
        </div>
    </article>
</template>


<style lang="scss">
@import "../assets/styles.scss";

article {
    width: 100%;
    min-height: auto;

    h2 {
        font-size: 2rem;
        color: white;
    }

    p {
        color: white;
        width: 60%;
        padding: 1rem;
        line-height: 1.8rem;
    }

    .Container__Phrase__And_Img {
        display: flex;
        justify-content: center;
        align-items: center;

        .Container__Phrase {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 70%;
            

            h3 {
                font-size: 2rem;
                color: white;
            }
        }
    }
}
</style>