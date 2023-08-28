import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
    clearScreen: false,
    server: {
        strictPort: true,
    },
    envPrefix: ['VITE_', 'TAURI_'],
    build: {
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        sourcemap: !!process.env.TAURI_DEBUG,
    },
    plugins: [solid()],
})
