import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ outDir: 'lib/types', include: ['./src/hooks']})],
  build: {
    lib: {
      entry: './src/hooks/index.ts',
      name: 'use-hooks',
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        dir: './lib',
        globals: {
          react: 'React',
          'react-dom': 'ReactDom'
        }
      },
    }
  }
})
