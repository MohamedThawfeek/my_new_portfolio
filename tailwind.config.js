const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%, 50%, 100%': { transform: 'translateX(6px)' },
          '25%, 75%': { transform: 'translateX(-6px)' },
        },
      },
      animation: {
        slide: 'slide 2s infinite forwards',
      },
    
      screens: {
        "2xl": "1440px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "420px",
        xss: "320px",
        mobile: "375px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary_color: "#ff8c00",
        section1: "#f5f5dc",
        orange_color: "#f75023"
      
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  variants: {
    display: ["group-hover"],
  },
};

module.exports = {
  ...config,
};
