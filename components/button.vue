<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'button',
    },
    variant: {
        type: String,
        default: 'primary',
    },
    size: {
        type: String,
        default: 'default',
    },
})

const emit = defineEmits(['click', 'delete'])

const buttonClasses = computed(() => {
    return ['button', props.variant, props.size]
})
</script>

<template>
    <button :class="buttonClasses" @click="emit('click')">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    width: 100%;
    height: 5.4rem;
    border-radius: 0.8rem;
    background-color: var(--primary);
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow:
        0px 0px 0px 0px rgba(23, 23, 23, 0.04),
        0px 2px 4px 0px rgba(23, 23, 23, 0.04),
        0px 7px 7px 0px rgba(23, 23, 23, 0.03),
        0px 15px 9px 0px rgba(23, 23, 23, 0.02),
        0px 27px 11px 0px rgba(23, 23, 23, 0.01),
        0px 42px 12px 0px rgba(23, 23, 23, 0);
}

.primary {
    background-color: var(--primary);
}

.secondary {
    background-color: var(--gray-4);
    color: black;
}

.default {
    height: 5.4rem;
    font-size: 1.8rem;
    padding: 0 1.2rem;
}

.small {
    height: 4.4rem;
    font-size: 1.4rem;
    padding: 0 1.2rem;
}
</style>
