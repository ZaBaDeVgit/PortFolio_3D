/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // The workflow supplies the repository path. Local development and custom
  // domains run at the root, without hard-coded asset URLs.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: { unoptimized: true },
  trailingSlash: true,
  allowedDevOrigins: ['*.e2b.app'],
};
module.exports = nextConfig;
