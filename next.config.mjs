/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://j21.dev/" : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
