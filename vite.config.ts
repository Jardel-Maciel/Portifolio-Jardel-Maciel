import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portifolio-Jardel-Maciel/', // <- Agora está certo!
  plugins: [
    tailwindcss(),
  ],
})
