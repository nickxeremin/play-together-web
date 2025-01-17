/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                // Text colors
                primary: "rgb(var(--primary))",
                secondary: "rgb(var(--secondary))",
                tertiary: "rgb(var(--tertiary))",

                // Component colors
                background: "rgb(var(--background))",
                popover: "rgb(var(--popover))",
                muted: "rgb(var(--muted))",
                accent: "rgb(var(--accent))",
                input: "rgb(var(--input))",

                // Main colors
                brand: {
                    DEFAULT: "rgb(var(--brand))",
                    light: "rgb(var(--brand-light))",
                    dark: "rgb(var(--brand-dark))",
                    title: "rgb(var(--brand-title))",
                    subtitle: "rgb(var(--brand-subtitle))",
                },
                success: {
                    DEFAULT: "rgb(var(--success))",
                    // light: "rgb(var(--destructive-light))",
                    // dark: "rgb(var(--destructive-dark))",
                },
                destructive: {
                    DEFAULT: "rgb(var(--destructive))",
                    light: "rgb(var(--destructive-light))",
                    dark: "rgb(var(--destructive-dark))",
                },

                // Other
                border: "rgb(var(--border))",
                ring: "rgb(var(--ring))",
            },
            fontFamily: {
                orbitron: ["Orbitron", "sans-serif"],
                rubik: ["Rubik", "sans-serif"],
            },
            backgroundImage: {
                "dotted-pattern": "url('/src/assets/images/bg-dots.png')",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        function ({ addBase, theme }) {
            addBase({
                ":root": {
                    // Text colors
                    "--primary": hexToRgb(theme("colors.slate.100")),
                    "--secondary": hexToRgb(theme("colors.zinc.300")),
                    "--tertiary": hexToRgb(theme("colors.zinc.500")),

                    // Component colors
                    "--background": hexToRgb(theme("colors.neutral.950")),
                    "--popover": hexToRgb(theme("colors.neutral.900")),
                    // "--background-100": hexToRgb(theme("colors.white")),
                    // "--background-200": hexToRgb(theme("colors.white")),
                    "--muted": hexToRgb(theme("colors.neutral.800")),
                    "--accent": hexToRgb(theme("colors.neutral.700")),
                    //"--input": hexToRgb(theme("colors.white")),

                    // Main colors
                    "--brand": hexToRgb(theme("colors.teal.600")),
                    "--brand-title": hexToRgb(theme("colors.teal.400")),
                    "--brand-subtitle": hexToRgb(theme("colors.teal.200")),

                    "--brand-light": hexToRgb(theme("colors.teal.400")),
                    "--brand-dark": hexToRgb(theme("colors.teal.600")),

                    // "--success": hexToRgb(theme("colors.blue.500")),
                    // "--success-dark": hexToRgb(theme("colors.blue.600")),

                    // "--destructive-light": hexToRgb(theme("colors.red.400")),
                    // "--destructive": hexToRgb(theme("colors.red.500")),
                    // "--destructive-dark": hexToRgb(theme("colors.red.600")),

                    // Other
                    "--ring": hexToRgb(theme("colors.teal.600")),
                    "--border": hexToRgb(theme("colors.neutral.800")),
                },
            })
        },
        function ({ addUtilities }) {
            addUtilities({
                ".focusable": {
                    "@apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2":
                        {},
                },
            })
        },
    ],
}

function hexToRgb(hex: string) {
    hex = hex.replace(/^#/, "")

    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => char + char)
            .join("")
    }

    let bigint = parseInt(hex, 16)
    let r = (bigint >> 16) & 255
    let g = (bigint >> 8) & 255
    let b = bigint & 255

    return `${r} ${g} ${b}`
}
