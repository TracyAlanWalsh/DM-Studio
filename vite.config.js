import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: '/DM-Studio/', // Update the base path
  server: {
    port: 5173, // or any other port you'd like
    host: '0.0.0.0', // This will allow you to access the server from any device in the network
  },
});