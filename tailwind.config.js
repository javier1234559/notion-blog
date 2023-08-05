/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#dad7d2',
            p: {
              fontSize: '18px',
              lineHeight: '28px',
              margin: '1px 0px',
              padding: '3px 2px',
            },
            span: {
              color: '#dad7d2',
              display: 'inline',
              fontSize: '24px',
              lineHeight: '31.2px',
            },
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            code: {
              backgroundColor: '#2d2d2d',
              borderRadius: '3px',
              color: '#cccccc',
              // fontFamily: 'Consolas, monospace',
              fontSize: '13.6px',
              lineHeight: '20.4px',
              margin: '6.8px 0px',
              padding: '13.6px',
              textAlign: 'left',
            },
            h1: {
              color: '#dad7d2',
              display: 'flex',
              fontSize: '40px',
              lineHeight: '48px',
              fontWeight:"400",
            },
            h2: {
              color: '#dad7d2',
              display: 'inline',
              fontSize: '24px',
              lineHeight: '31.2px',
              fontWeight:"400",
            },
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
          DEFAULT: "#7f5af0",
          alternate: "#2cb67d",
          secondary: "#f25f4c",
          primary: "#7f5af0",
        },
      },
      // fontFamily: {
      //   ...fontFamily,
      //   sans: ["Space Grotesk", "sans-serif"],
      //   mono: ["Space Mono", "monospace"],
      //   rubik: ["Rubik", "san-serif", "system-ui"],
      // },
      // minWidth: {
      //   xs: "320px",
      // },
      // minHeight: {
      //   64: "256px",
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
