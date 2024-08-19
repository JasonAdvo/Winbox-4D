import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
build: {
			target: "modules",
			outDir: "../4d.winboxvip.vip",
			assetsDir: "assets",
			assetsInlineLimit: 4096,
			cssCodeSplit: true,
			sourcemap: false,
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes('node_modules')) {
							return id.toString().split('node_modules/')[1].split('/')[0].toString();
						}
					}
				}
			},
			commonjsOptions: {},
			manifest: false,
			minify: "terser", //terser 构建后文件体积更小
			terserOptions: {},
			write: true,
			emptyOutDir: true,
			brotliSize: true,
			chunkSizeWarningLimit: 500
		},
})
