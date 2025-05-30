/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: process.env.NODE_ENV === "production" ? "" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "https://jeydinpham.com/" : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
