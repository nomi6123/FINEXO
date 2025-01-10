/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
        },
      },
      animation: {
        upDown: "upDown 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
