import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import sassPlugin from 'vite-plugin-sass';
import styledJsx from 'vite-plugin-styled-jsx';
import styledComponents from 'vite-plugin-styled-components';
import emotionPlugin from '@emotion/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [
    react(
      {
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }), sassPlugin(), styledJsx(), styledComponents(), emotionPlugin()],
})