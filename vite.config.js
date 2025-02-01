import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,  // Ensure Vite runs on the correct port
    host: '0.0.0.0',  // Bind to all network interfaces
  },
  preview: {
    port: process.env.PORT || 5173,  // Ensure Vite preview runs on the correct port
    host: '0.0.0.0',
  }
});
