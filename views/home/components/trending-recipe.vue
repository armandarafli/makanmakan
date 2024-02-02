<script setup>
import { ref } from 'vue'

const recipes = ref([
    {
        id: 1,
        title: 'onion rings',
        image: '/temp/recipes/onion-rings.jpg',
        rating: 4,
        maker: {
            name: 'Alex Martin',
            image: 'assets/temp/users/alex-martin.jpg',
        },
    },
    {
        id: 2,
        title: 'Toast with Tomato, Onion, & Hummus',
        image: '/temp/recipes/toast.jpg',
        rating: 2,
        maker: {
            name: 'Alex Martin',
            image: 'assets/temp/users/alex-martin.jpg',
        },
    },
    {
        id: 3,
        title: 'Ham, Egg, and Spinach Roll-Ups',
        image: '/temp/recipes/ham.jpg',
        rating: 3,
        maker: {
            name: 'Alex Martin',
            image: 'assets/temp/users/alex-martin.jpg',
        },
    },
    {
        id: 4,
        title: 'Chicken Ranch Wrap',
        image: '/temp/recipes/chicken-ranch.jpg',
        rating: 4,
        maker: {
            name: 'Alex Martin',
            image: 'assets/temp/users/alex-martin.jpg',
        },
    },
    {
        id: 5,
        title: 'Tuna Mex Tuna Salad',
        image: '/temp/recipes/salad.jpg',
        rating: 4,
        maker: {
            name: 'Alex Martin',
            image: 'assets/temp/users/alex-martin.jpg',
        },
    },
    {
        id: 6,
        title: 'Strawberry and Cherry pancake',
        image: '/temp/recipes/pencake.jpg',
        rating: 4,
        maker: {
            name: 'Alex Martin',
            image: 'assets/temp/users/alex-martin.jpg',
        },
    },
])
</script>

<template>
    <div class="wrapper">
        <div class="mb-[7.2rem]">
            <h3>Resep Trending</h3>
        </div>

        <div class="cards">
            <div v-for="recipe in recipes" :key="recipe.id" class="card">
                <div class="image flex w-full h-auto">
                    <img class="flex w-full h-auto" :src="recipe.image" alt="" />
                </div>

                <div class="information">
                    <div class="flex items-center gap-[.4rem] mb-1">
                        <span v-for="n in 5" :key="n" class="flex"
                            ><img
                                :src="
                                    n <= recipe.rating ? '/icons/star-gray.svg' : '/icons/star-primary.svg'
                                "
                        /></span>
                    </div>

                    <div class="mb-1">
                        <h6>{{ recipe.title }}</h6>
                    </div>

                    <div>
                        <p class="text-[1.4rem]">{{ recipe.maker.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    position: relative;
    width: 100%;
    max-width: 120rem;
    height: auto;
    margin: 0 auto;
    padding: 8rem 0;
}

.cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    grid-gap: 3.2rem;
}

.card {
    width: 100%;
    background-color: white;
    overflow: hidden;
    cursor: pointer;

    .image {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        overflow: hidden;

        img {
            transition: all 0.3s ease-in-out;
        }
    }

    .information {
        padding: 1.6rem;
        border: 1px solid var(--gray-4);
        border-top: none;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    &:hover {
        .image {
            img {
                scale: 1.05;
            }
        }
    }
}
</style>
