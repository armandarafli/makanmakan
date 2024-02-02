<script setup>
const goToSignin = () => {
    navigateTo('/auth/signin')
}

const goToSignUp = () => {
    navigateTo('/auth/signup')
}
</script>

<template>
    <div class="wrapper">
        <div class="inner">
            <div class="logo">
                <h3>Makan<span class="text-primary">Makan</span></h3>
            </div>

            <nav class="navigation">
                <ul class="paths">
                    <li class="path"><NuxtLink to="/">Beranda</NuxtLink></li>
                    <li class="path"><NuxtLink to="/recipes">Resep</NuxtLink></li>
                    <li class="path"><NuxtLink to="/about">Tentang Kami</NuxtLink></li>
                </ul>
            </nav>

            <div class="flex gap-2">
                <div class="w-[11.2rem]">
                    <Button size="small secondary" @click="goToSignin">Masuk</Button>
                </div>

                <div class="w-[11.2rem]">
                    <Button size="small" @click="goToSignUp">Daftar</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    position: relative;
    width: 100%;
    height: 15.2rem;
    background-color: transparent;
    z-index: 1;
}

.inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
    width: inherit;
    height: inherit;
}

.logo {
    font-size: 3.2rem;
}

.navigation {
    .paths {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;

        .path {
            font-size: 1.8rem;
        }
    }
}
</style>
