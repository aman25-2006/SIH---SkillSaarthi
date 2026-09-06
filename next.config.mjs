/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? '/SIH---SkillSaarthi' : '',
}

export default nextConfig
