import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xlmax": { max: "1536px" },

        xlmax: { max: "1280px" },

        lgmax: { max: "1024px" },

        mdmax: { max: "768px" },

        smmax: { max: "640px" },
      },
      colors: {
        greyblack: "#262626",
        orange: "#FE481C",
        aside: "#DED1C1",
      },
      minWidth: {
        "1/2": "50%",
        "2/5": "45%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
