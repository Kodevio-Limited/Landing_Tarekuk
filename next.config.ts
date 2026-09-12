import type { NextConfig } from "next";

const nextConfig: NextConfig =
  process.env.VERCEL
    ? {}
    : // Standalone output is for the Dockerfile / self-hosting only.
      // Vercel builds must use the default output or the build fails with
      // ENOENT .next/next-server.js.nft.json during finalization.
      { output: "standalone" };

export default nextConfig;
