/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    OCI_URL: process.env.OCI_URL
  }
}


module.exports = nextConfig
