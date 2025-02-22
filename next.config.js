/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  env:{
    OCI_URL: process.env.OCI_URL
  }
}


module.exports = nextConfig
