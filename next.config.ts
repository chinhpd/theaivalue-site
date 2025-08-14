import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Cho phép build ngay cả khi còn lỗi ESLint
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;