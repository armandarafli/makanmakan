<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
    alert(`Email: ${email.value}, Password: ${password.value}`)
}
</script>

<template>
    <div class="wrapper">
        <div class="flex w-full gap-[3.2rem]">
            <div class="image flex-1 w-full h-auto">
                <img class="w-full h-full" src="assets/images/auth.jpg" alt="" />
            </div>

            <div class="flex-1">
                <div class="mb-4">
                    <h3>Lanjut untuk masuk</h3>
                </div>

                <form class="form" @submit.prevent="handleSubmit">
                    <div>
                        <input v-model="email" type="email" spellcheck="false" required placeholder="Email" />
                    </div>

                    <div>
                        <input
                            v-model="password"
                            type="password"
                            spellcheck="false"
                            required
                            placeholder="Kata Sandi" />
                    </div>

                    <div>
                        <Button>Masuk</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    position: relative;
    width: 100%;
    max-width: 100rem;
    height: auto;
    margin: 0 auto;
    padding: 8rem 0;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
        width: 100%;
        height: 5.8rem;
        padding: 0 2.4rem;
        border: 1px solid var(--gray-4);
        font-size: 1.8rem;
        outline: none;
        border-radius: 8px;

        &::placeholder {
            color: var(--gray-3);
        }

        &:focus {
            border: 1px solid var(--primary);
        }
    }
}
</style>
