import type { NextConfig } from "next"

const apiUrl = new URL(process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:6500")

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [new URL(`${apiUrl.origin}/static/images/**`)],
    dangerouslyAllowLocalIP: apiUrl.hostname === "localhost",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
}

export default nextConfig
