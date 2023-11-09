/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                primary: "var(--color-bg-primary)"
            },
            animation: {
                bounce200: "bounce 1s infinite 200ms",
                bounce400: "bounce 1s infinite 400ms"
            },
            backgroundColor: {
                secondary: "var(--color-bg-secondary)",
                search: "var(--color-bg-search)",
                panel: "var(--color-bg-panel)",
                forcast: "var(--color-bg-forcast)",
                switchb: "var(--color-bg-switch)",
                slide: "var(--color-bg-slide)"
            },
            textColor: {
                accent: "var(--color-text-accent)",
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
                head: "var(--color-text-head)",
                search: "var(--color-text-head)",
                head: "var(--color-text-head)",
                panel: "var(--color-text-panel-head)",
                switchb: "var(--color-text-switch)"
            }
        }
    },
    plugins: [],
    darkMode: "class"
};
