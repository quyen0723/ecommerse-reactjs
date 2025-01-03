import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@routers': path.resolve(__dirname, 'src/routers'),
            '@apis': path.resolve(__dirname, 'src/apis'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@images': path.resolve(__dirname, 'src/assets/images')
        }
    }
});
