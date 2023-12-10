<script setup lang="ts">
import Pagination from '../components/Pagination.vue';

</script>


<template>
    <article>
        <h2>Videos</h2>
        <section class="Container__Grid__Section__Videos">
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/fIQMktyP90s?si=ku_RAEiGcZYEweOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                
                <p>Whole Loota Love (The Royal Albert Hall 1970)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/Ly6ZhQVnVow?si=zED0hpJkxyeeYrFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Stairway To Heaven (Earls Court 1975)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/6tlSx0jkuLM?si=H-bLecoKLi1xaxF_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Black Dog (Madison Square Garden 1973)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/hW_WLxseq0o?si=cDRQQ7Y0IOCroFq2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Kashmir (Knebworth 1979)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/2X8fDaP7ylM?si=bytuxPfkTjL4wPci" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Page & Plant: Ramble On (Birmingham 1995)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/E-Xna3ny6KY?si=a-DBvMzrH42ZRNRy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Good Times Bad Times (London 2007)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/RlNhD0oS5pk?si=hbGl-jwmKZWw8d_j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Immigrant Song (Sydney 1972)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/emzih-d4Cs8?si=P71RbzROYdM-_jua" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Page & Plant: When the Levee Breaks(Milwaukee, 1995)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/YkMF0tHyEC0?si=6a_UCGJo8hDetiiW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Rock and Roll (Landover 1977)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/KwG9iRFmY1I?si=8UNx39uuZKzhf1Ua" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Misty Mountain Hop (Madison Square Garden 1973)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/TvG4VGnjpsg?si=1unb6UieBk3G10zf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>Over the Hills and Far Away (London 1975)</p>
            </div>
            <div>
                <iframe width="540" height="300" src="https://www.youtube.com/embed/6XIQR4p30Wo?si=wuzVIazF4l4Z_h2i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>The Ocean (Madison Square Garden 1973)</p>
            </div>

        </section>
    </article>

    <Pagination/>
</template>


<style lang="scss" scoped>
@import "../assets/styles.scss";

article {
    background-color: #2C2C2C;

    h2 {
        padding-left: 1rem;
        font-size: 2rem;
        color: white;
    }

    .Container__Grid__Section__Videos {
        
        width: 100%;
        height: auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(47%, 1fr));
        align-items: center;

        div {
            padding-left: 1rem;

            iframe {
                width: 560px;
                height: 270px;
            }

            p {
                font-size: 1.2rem;
                color: white;
            }
        }

    }
    
    
}

</style>


  