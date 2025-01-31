import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Uses Render's dynamic PORT environment variable or defaults to 3000
    strictPort: true,  // Enforces the specified port
    host: '0.0.0.0',  // Ensures the app binds to all network interfaces, necessary for cloud services like Render
  },
});
