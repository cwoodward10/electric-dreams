import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias:{
      '@stabilitySDK' : path.resolve(__dirname, './api-interfaces/gooseai/generation/')
    },
  },
  plugins: [react()],
})
