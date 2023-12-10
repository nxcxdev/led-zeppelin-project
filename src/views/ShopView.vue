<script setup lang="ts">
</script>

<template>
    <article>
        <section class="Title__And__Cart_Img">
            <h2>Shop</h2>
            <div class="Cart__Img">
                <h4>Cart</h4>
                <img src="../components/icons/cart-shopping-fast_svgrepo.com.png" alt="icon cart">
            </div>
        </section>

        <section class="Grid__Container__Shop">
                <div class="Container__Card__Add__To__Cart">
                    <img src="../assets/img_shop1.png" alt="">
                    <p>Led Zeppelin | Mothership</p>
                    <div class="Container__Price__And__Button">
                        <h3>$22.75</h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div class="Container__Card__Add__To__Cart">
                    <img src="../assets/img_shop2.png" alt="">
                    <p>Led Zeppelin | Mothership</p>
                    <div class="Container__Price__And__Button">
                        <h3>$22.75</h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div class="Container__Card__Add__To__Cart">
                    <img src="../assets/img_shop3.png" alt="">
                    <p>Led Zeppelin | Mothership</p>
                    <div class="Container__Price__And__Button">
                        <h3>$22.75</h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div class="Container__Card__Add__To__Cart">
                    <img src="../assets/img_shop4.png" alt="">
                    <p>Led Zeppelin | Mothership</p>
                    <div class="Container__Price__And__Button">
                        <h3>$22.75</h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div class="Container__Card__Add__To__Cart">
                    <img src="../assets/img_shop5.png" alt="">
                    <p>Led Zeppelin | Mothership</p>
                    <div class="Container__Price__And__Button">
                        <h3>$22.75</h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div class="Container__Card__Add__To__Cart">
                    <img src="../assets/img_shop6.png" alt="">
                    <p>Led Zeppelin | Mothership</p>
                    <div class="Container__Price__And__Button">
                        <h3>$22.75</h3>
                        <button>Add to Cart</button>
                    </div>
                </div>

            
        </section>

    </article>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

article {
    background: #2C2C2C;
    min-height: auto;

    .Title__And__Cart_Img {
        padding: 0.1rem;
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin-bottom: 1rem;

        h2 {
            font-size: 2rem;
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

    .Grid__Container__Shop {
        width: 100%;
        height: auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
        

        .Container__Card__Add__To__Cart {
            width: 100%;
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;


            p {
                color: white;
                font-size: 1rem;
                padding: 0.5rem;
                
            }
        

            .Container__Price__And__Button {
                display: flex;
                justify-content:space-between;
                align-items: center;
                width:60%;
                background-color:#2C2C2C;
                

                h3 {
                    font-size: 1.5rem;
                    color: white;
                }

                button {
                    background-color: #2C2C2B;
                    color: white;
                    width: auto;
                    height: 1.5rem;
                    padding: 5px;
                }
            }
        }
    }
}

</style>