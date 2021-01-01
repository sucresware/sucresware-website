module.exports = {
    purge: {
        content: [
            './src/index.html',
            './src/js/**/*.vue',
        ],
    },
    plugins: [
        require('tailwindcss-theming'),
        require('tailwind-scrollbar'),
    ]
}
