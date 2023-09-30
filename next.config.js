/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.dog.ceo"], // Agrega el dominio permitido aquí
  },
};

module.exports = nextConfig;
