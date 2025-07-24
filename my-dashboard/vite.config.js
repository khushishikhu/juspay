import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

if (!globalThis.crypto) {
  globalThis.crypto = require('crypto').webcrypto;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
