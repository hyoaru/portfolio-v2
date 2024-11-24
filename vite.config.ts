import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-v2/',
  plugins: [react(), tsconfigPaths()],
})
