import { defineConfig } from "vite";

export default defineConfig({
  base: "/lecture-5",
  server: {
    proxy: {
      "/lecture-5/api": "http://localhost:3000",
    },
  },
});
