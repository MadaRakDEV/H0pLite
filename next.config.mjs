/** @type {import('next').NextConfig} */
const nextConfig = {
  // Despliegue estático para GitHub Pages (HTML plano en /H0pLite/).
  output: 'export',
  basePath: '/H0pLite',
  images: {
    // Sin optimización de imágenes en export estático (usa <img> directo).
    unoptimized: true,
  },
  // Evita que el trailing slash cause problemas en Pages.
  trailingSlash: true,
};

export default nextConfig;
