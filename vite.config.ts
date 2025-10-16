import { defineConfig } from "vite"

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    console.log(id)
                    if (id.includes('node_modules')) {
                        return id.split("node_modules")[1].split("/")[0];
                    }

                    return null;
                }
            }
        }
    },
    server: {
        allowedHosts: true
    }
})