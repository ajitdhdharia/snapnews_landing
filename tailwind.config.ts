import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  /*Custom styles and properties that can be used throughout your project. */
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-at-t":
          "radial-gradient(at top, var(--tw-gradient-stops))",
        "gradient-radial-at-b":
          "radial-gradient(at bottom, var(--tw-gradient-stops))",
        "gradient-radial-at-l":
          "radial-gradient(at left, var(--tw-gradient-stops))",
        "gradient-radial-at-r":
          "radial-gradient(at right, var(--tw-gradient-stops))",
        "gradient-radial-at-tl":
          "radial-gradient(at top left, var(--tw-gradient-stops))",
        "gradient-radial-at-tr":
          "radial-gradient(at top right, var(--tw-gradient-stops))",
        "gradient-radial-at-bl":
          "radial-gradient(at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-at-br":
          "radial-gradient(at bottom right, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-white": "0 4px 100px 80px rgba(255,255,255,1)",
        "custom-black": "0 -4px 6px -1px rgba(0,0,0,0.1)",
        "custom-blue": "0 0 120px 2px rgba(56, 107, 246,1)",
        "custom-green": "0 8px 120px 2px rgba(38, 66, 34,1)",
      },
      spacing: {
        "128": "32rem", // Custom width class
        "144": "36rem", // Custom height class
      },
      colors: {
        snapNewsColor: {
          blue: "#386BF6",
        },
      },
      borderRadius: {
        "45": "45px",
        "30": "30px",
      },
      width: {
        "94": "23rem",
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        move: "move 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
      },
    },
  },

  /* custom plugins for Tailwind CSS. In this specific case, the plugins are adding utility classes for background images
  using SVG data URIs. */
  plugins: [
    require("@tailwindcss/typography"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
