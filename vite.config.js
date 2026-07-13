import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // Inyecta variables, mixins y funciones en cada .scss automáticamente,
        // así los .scss de componentes pueden usarlos sin @use manual.
        additionalData: `
          @use "@/styles/abstracts/variables" as *;
          @use "@/styles/abstracts/mixins" as *;
          @use "@/styles/abstracts/functions" as *;
        `,
      },
    },
  },
})
