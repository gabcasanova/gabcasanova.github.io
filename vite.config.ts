import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 50 },
        jpg: { quality: 50 },
        webp: { quality: 80 },
        avif: { quality: 70 },
        svg: {
            plugins: [
                { name: 'removeViewBox' },
                { name: 'sortAttrs' },
            ],
        },
    }),
  ],
})
