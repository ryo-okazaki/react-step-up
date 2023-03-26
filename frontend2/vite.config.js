import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import sassPlugin from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [react(), sassPlugin()],
})