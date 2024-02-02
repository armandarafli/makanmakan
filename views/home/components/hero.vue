<script setup>
const goToSignin = () => {
    navigateTo('/auth/signin')
}
</script>

<template>
    <div class="wrapper w-full justify-between items-center flex gap-[4.8rem]">
        <div class="flex flex-col max-w-[57.6rem]">
            <div class="mb-[2.5rem]">
                <h1>Your Daily Dish A <span class="text-primary">Food</span> Journey</h1>
            </div>

            <div class="mb-[2.5rem]">
                <h4 class="text-gray-2 font-[300]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra,
                    venenatis nunc eget, finibus est. Proin velit
                </h4>
            </div>

            <div class="w-[17.6rem] mb-[1.2rem]">
                <Button>Daftar</Button>
            </div>

            <div>
                <p class="text-gray-2">
                    Do you have account?
                    <span class="text-primary hover:underline cursor-pointer" @click="goToSignin">Masuk</span>
                </p>
            </div>
        </div>

        <div class="max-w-[57.6rem]">
            <img class="w-inherit h-auto" src="assets/images/hero.png" alt="hero-image" />
        </div>

        <div class="ornament">
            <img src="assets/ornament.svg" alt="ornament" />
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
    padding: 12rem 0;
}

.ornament {
    position: absolute;
    top: -18rem;
    right: -17rem;
    width: 88.1rem;
    height: auto;
    z-index: -1;
}
</style>
