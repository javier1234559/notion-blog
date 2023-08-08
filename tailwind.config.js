/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#dad7d2',
            maxWidth: '100%',
            // p: {
            //   fontSize: '18px',
            //   lineHeight: '28px',
            //   margin: '1px 0px',
            //   padding: '3px 2px',
            // },
            // span: {
            //   color: '#dad7d2',
            //   display: 'inline',
            //   fontSize: '24px',
            //   lineHeight: '31.2px',
            // },
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            // code: {
            //   backgroundColor: '#2d2d2d',
            //   borderRadius: '3px',
            //   color: '#cccccc',
            //   fontSize: '13.6px',
            //   lineHeight: '20.4px',
            //   margin: '6.8px 0px',
            //   padding: '13.6px',
            //   textAlign: 'left',
            // },
            // h1: {
            //   color: '#dad7d2',
            //   display: 'flex',
            //   fontSize: '40px',
            //   lineHeight: '48px',
            //   fontWeight:"400",
            // },
            // h2: {
            //   color: '#dad7d2',
            //   display: 'inline',
            //   fontSize: '24px',
            //   lineHeight: '31.2px',
            //   fontWeight:"400",
            // },
          },
        },
      },
      colors: {
        codeblock: "#22272e",
        foreground: {
          DEFAULT: "#F0EDE6",
          primary: "#F0EDE6",
          secondary: "#DAD7D2",
        },
        background: {
          DEFAULT: "#242526",
          secondary: "#0D0E10",
          primary: "#242526",
        },
        accent: {
          DEFAULT: "hsl(180, 56%, 50%)",
          alternate: "hsl(130, 55%, 67%)",
          secondary: "hsl(54, 100%, 62%)",
          primary: "hsl(180, 56%, 50%)",
        },
      },
      fontFamily: {
        ...fontFamily,
        sans: ["var(--font-space_grotesk)"],
        mono: ["var(--font-space_mono)"],
        rubik: ["var(--font-rubik)"],
      },
      minWidth: {
        xs: "320px",
      },
      minHeight: {
        64: "256px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
