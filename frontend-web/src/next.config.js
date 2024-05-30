const nextConfig = {
  webpack(config, options) {
    if (!options.isServer) {
      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      });
    }

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

// 그 후에 module.exports를 사용하여 설정을 내보냅니다.
module.exports = nextConfig;
