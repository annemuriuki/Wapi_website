import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Enable minification to reduce bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
    },
    rollupOptions: {
      output: {
        // Optimize chunk splitting for mobile
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['react-icons'],
          slider: ['react-slick', 'slick-carousel'],
        },
        // Smaller chunks for mobile
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext)) {
            return `assets/images/[name]-[hash].[ext]`
          }
          if (/css/i.test(ext)) {
            return `assets/css/[name]-[hash].[ext]`
          }
          return `assets/[name]-[hash].[ext]`
        },
      },
    },
    // Reduce chunk size warnings for mobile
    chunkSizeWarningLimit: 500,
    // Enable source maps for debugging (disable in production)
    sourcemap: false,
    // Optimize CSS
    cssCodeSplit: true,
  },
  server: {
    port: 5173,
    host: true,
  },
  publicDir: 'public',
  // Optimize dependencies for mobile
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-icons',
      'react-slick',
      'slick-carousel',
    ],
  },
  // Mobile-specific optimizations
  define: {
    __DEV__: false,
  },
})
