/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === '1';

const nextConfig = isGitHubPages
  ? {
      // Despliegue estático para GitHub Pages (HTML plano en /H0pLite/).
      output: 'export',
      basePath: '/H0pLite',
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      // Vercel / Netlify: Next.js normal, sirve en la raíz.
      images: { unoptimized: true },
    };

export default nextConfig;
