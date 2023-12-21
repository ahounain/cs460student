// vite.config.js
export default {
  build: {
    rollupOptions: {
      external: ['/deps/three/threelet.esm.js']
    }
  },
  base: "/",
};
