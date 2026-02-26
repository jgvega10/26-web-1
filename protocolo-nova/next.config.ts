import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
<<<<<<< HEAD
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        pathname: '/**'
=======
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Replace with your external domain
        pathname: '/**', 
>>>>>>> 561e369d49def3c5aea40cd54537b966e663e5dc
      },
    ],
  },
};

export default nextConfig;
