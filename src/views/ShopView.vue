<script setup lang="ts">
</script>

<template>
    <main>
        <section class="Title__And__Cart_Img">
            <h2>Shop</h2>
            <div class="Cart__Img">
                <h4>Cart</h4>
                <img src="../components/icons/cart-shopping-fast_svgrepo.com.png" alt="icon cart">
            </div>
        </section>

        <section>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            
        </section>

    </main>
</template>

<style lang="scss">
@import "../assets/styles.scss";

main {
    background: #1E1E1E;

    .Title__And__Cart_Img {
        padding: 0.1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-size: 3rem;
            color: white;
            margin: 0 0.5rem;
        }

        .Cart__Img {
            display: flex;
            justify-content: center;
            align-items: center;

            h4 {
                font-size: 1.5rem;
                color: white;
            }

            img {
                width: 60px;
                height: 60px;
                margin: 0 0.5rem;
            }
        }
    }
}

</style>