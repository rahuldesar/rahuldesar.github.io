/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      rotate: {
        360: "360deg",
      },
      animation: {
        "custom-rotate": "rotate 3s linear infinite",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        // TODO: move to inter
        inter: ["Inter", "Roboto", "sans-serif"],
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      colors: {
        'background': '#1e1e2e',

        // Dark theme colors
        catDarkRosewater: '#dc8a78',
        catDarkFlamingo: '#dd7878',
        catDarkPink: '#ea76cb',
        catDarkMauve: '#8839ef',
        catDarkRed: '#d20f39',
        catDarkMaroon: '#e64553',
        catDarkPeach: '#fe640b',
        catDarkYellow: '#df8e1d',
        catDarkGreen: '#a6e3a1',
        catDarkTeal: '#179299',
        catDarkSky: '#04a5e5',
        catDarkSapphire: '#209fb5',
        catDarkBlue: '#1e66f5',
        catDarkLavender: '#7287fd',
        catDarkText: '#4c4f69',
        catDarkSubtext1: '#5c5f77',
        catDarkSubtext0: '#6c6f85',
        catDarkOverlay2: '#7c7f93',
        catDarkOverlay1: '#8c8fa1',
        catDarkOverlay0: '#9ca0b0',
        catDarkSurface2: '#acb0be',
        catDarkSurface1: '#bcc0cc',
        catDarkSurface0: '#ccd0da',
        catDarkBase: '#eff1f5',
        catDarkMantle: '#e6e9ef',
        catDarkCrust: '#dce0e8',

        // Light theme colors
        catLightRosewater: '#dc8a78',
        catLightFlamingo: '#dd7878',
        catLightPink: '#ea76cb',
        catLightMauve: '#8839ef',
        catLightRed: '#d20f39',
        catLightMaroon: '#e64553',
        catLightPeach: '#fe640b',
        catLightYellow: '#df8e1d',
        catLightGreen: '#40a02b',
        catLightTeal: '#179299',
        catLightSky: '#04a5e5',
        catLightSapphire: '#209fb5',
        catLightBlue: '#1e66f5',
        catLightLavender: '#7287fd',
        catLightText: '#4c4f69',
        catLightSubtext1: '#5c5f77',
        catLightSubtext0: '#6c6f85',
        catLightOverlay2: '#7c7f93',
        catLightOverlay1: '#8c8fa1',
        catLightOverlay0: '#9ca0b0',
        catLightSurface2: '#acb0be',
        catLightSurface1: '#bcc0cc',
        catLightSurface0: '#ccd0da',
        catLightBase: '#eff1f5',
        catLightMantle: '#e6e9ef',
        catLightCrust: '#dce0e8',
      },

    },
  },
  plugins: [],
};

