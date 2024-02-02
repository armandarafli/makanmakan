/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './views/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        fontSize: {
            xs: '13px',
            sm: '14px',
            base: '16px',
            lg: '20px',
            xl: '24px',
            '2xl': '28px',
            '3xl': '32px',
            '4xl': '36px',
            '5xl': '40px',
        },
        spacing: {
            1: '10px',
            2: '20px',
            3: '30px',
            4: '40px',
            5: '50px',
            6: '60px',
        },
        extend: {
            colors: {
                primary: '#b55d51',
                'gray-2': '#878787',
            },
        },
    },
    plugins: [],
}
