import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["selector", "[data-mode='dark']"],
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "background-1": "rgb(22, 25, 28)",
                "background-2": "rgb(42, 45, 48)",
                "background-3": "rgb(62, 65, 68)",
                "background-4": "rgb(82, 85, 88)",
                "text": "rgb(250, 249, 246)",
                "text-1": "rgb(210, 209, 206)",
                "text-2": "rgb(173, 172, 171)",
                "text-3": "rgb(113, 112, 111)",
                "primary": "rgb(118, 73, 254)",
                "primary-light": "rgb(144, 111, 252)",
                "secondary": "rgb(73, 254, 208)",
                "shadow": "rgb(17, 20, 23)",
                "navbar-opaque": "rgb(27, 30, 33)",
            },
            width: {
                "112": "28rem",
                "120": "30rem",
                "128": "32rem",
                "144": "36rem",
                "160": "40rem",
                "176": "44rem",
                "192": "48rem",
                "208": "52rem",
                "224": "56rem",
                "240": "60rem",
                "256": "64rem",
            },
            height: {
                "112": "28rem",
                "120": "30rem",
                "128": "32rem",
                "144": "36rem",
                "160": "40rem",
                "176": "44rem",
                "192": "48rem",
                "208": "52rem",
                "224": "56rem",
                "240": "60rem",
                "256": "64rem",
            },
            backdropBlur: {
                "msm": "8px",
            },
            fontSize: {
                "xxs": [ "0.625rem", "0.75rem" ],
            },
        },
    },
    variants: {
        hyphens: ['responsive'],
    },
    plugins: [],
};
export default config;
