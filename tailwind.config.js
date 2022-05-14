// tailwind.config.js
module.exports = {
    purge: {
        enabled: true,
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    media: false,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
    },
}