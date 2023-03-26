import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import sassPlugin from 'vite-plugin-sass';
import styledJsx from 'vite-plugin-styled-jsx';
import styledComponents from 'vite-plugin-styled-components';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [react(), sassPlugin(), styledJsx(), styledComponents()],
})