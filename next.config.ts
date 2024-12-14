import { NextConfig } from "next/dist/types";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;

// throw new CanaryOnlyError('experimental.ppr');
// pnpm install next@canary 해줬음
