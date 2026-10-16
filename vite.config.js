import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/DavidBecas/", // GitHub Pages: https://daevrusse.github.io/DavidBecas/
})
