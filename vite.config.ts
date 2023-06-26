import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Ui',
      fileName: 'ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  test: {
    globals: true,
    include: ['tests/unit/**/*.{test,spec}.ts', 'src/**/*.spec.ts'],
    environment: 'happy-dom',
    coverage: {
      exclude: ['__mocks__/*', 'tests/*', '**/*.spec.ts'],
      provider: 'v8',
      reporter: ['text', 'json', 'json-summary'],
    },
  },
})
