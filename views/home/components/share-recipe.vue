<template>
    <div class="wrapper w-full items-center flex gap-[4.8rem]">
        <div class="max-w-[38.8rem] rounded-[8px] overflow-hidden">
            <img class="w-inherit h-auto" src="assets/images/share-recipe.jpg" alt="" />
        </div>

        <div class="flex flex-col items-center gap-4 text-center">
            <div>
                <h2>Bagikan <span class="text-primary">Resepmu</span></h2>
            </div>

            <div class="max-w-[70rem]">
                <p class="text-gray-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra,
                    venenatis nunc eget, finibus est. Proin velit
                </p>
            </div>

            <div class="flex w-[25rem]">
                <Button>Buat Resep Sekarang</Button>
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
</style>
