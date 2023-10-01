import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      brand: "#9E6EFE",
      dark: {
        10: "#2D3748",
        20: "#718096",
        30: "#F9F9F9",
        40: "#FFFFFF",
      },
      support: {
        msg: "#2962FF",
        success: "#0BB07B",
        warn: "#FFCE52",
        error: "#F03D3D",
        info: "#E0E0E0",
      }
    }
  },
  plugins: [],
}
export default config
