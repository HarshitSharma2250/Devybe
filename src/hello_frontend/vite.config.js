import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

export default defineConfig({
  root: './src/hello_frontend',

  build: {
    emptyOutDir: true,
  },

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },

  server: {
    // proxy: {
    //   '/external-api': {
    //     target: 'https://devybe-backend.onrender.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/external-api/, ''),
    //   },
    
    // },
  },
  // headers: {
  //   'Content-Security-Policy': "default-src 'self' https://devybe-backend.onrender.com",
  //   'Access-Control-Allow-Origin': '*', // Change '*' to your domain for production
  //   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //   'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  // },
  plugins: [
    react(),
    // environment("all", { prefix: "CANISTER_" }),
    // environment("all", { prefix: "DFX_" }),
  ],

  // resolve: {
  //   alias: [
  //     {
  //       find: "declarations",
  //       replacement: fileURLToPath(
  //         new URL("../declarations", import.meta.url)
  //       ),
  //     },
  //   ],
  //   dedupe: ['@dfinity/agent'],
  // },
});
