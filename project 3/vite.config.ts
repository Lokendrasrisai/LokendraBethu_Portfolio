import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/LokendraBethu_Portfolio/",   // 👈 Add this line
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
