import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from "url";

export default defineConfig({
    plugins: [react()],
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
    resolve: {
        alias: [
          { find: '@homework-task', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        ],
      },
});
