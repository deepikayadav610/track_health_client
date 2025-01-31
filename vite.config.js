import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 10000,  // This makes sure the app runs on the Render-managed port
    strictPort: true,  // Enforces the specified port
  },
});
