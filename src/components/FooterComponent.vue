<script setup lang="ts"></script>


<template>
    <footer>

        <div class="Footer__Section__Contact">
            <p>Contact</p>
            <p class="Vertica__Line">|</p>
            <p>Newsletter</p>
            <p class="Vertica__Line">|</p>
            <p>About Us</p>
        </div>

        <div class="Container__Copyright__Icons">
            <div class="copyright">
                <span class="Color__White">Copyright © 2023</span> <span class="Color__Red">Led-Zeppelin</span> <span class="Color__White">All Right Reserved</span>
            </div>
        
        </div>

    </footer>
</template>


<style lang="scss" scoped>
@import "../assets/styles.scss";

footer {
    background-color: #212121;

    .Footer__Section__Contact {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            padding: 0.5rem;
            color: white;
            font-size: 1.5rem;
        }

        .Vertica__Line {
            font-size: 1rem;
            color: white;
        }
    }

    .Container__Copyright__Icons {

        .copyright {
            padding: 0.5rem;

            .Color__White {
                color: white;
            }
            
            .Color__Red {
                color: red;
            }
        }
        
    }
}
</style>