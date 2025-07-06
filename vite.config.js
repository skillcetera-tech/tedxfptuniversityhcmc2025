import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/tedxfptuniversityhcmc2025/',
  plugins: [react()],
})