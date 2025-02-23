import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
	build: {
		commonjsOptions: {
			include: ["tailwind.config.cjs", "node_modules/**"]
		}
	},
	optimizeDeps: {
		include: ["tailwind.config"]
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"tailwind.config": path.resolve(__dirname, "./tailwind.config.cjs")
		}
	},
	plugins: [react(), tailwindcss()],
	server: {
		port: 8080,
		watch: {
			usePolling: true
		}
	}
});
