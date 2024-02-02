const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `
            @import 'common';
            @import 'fonts';
            @import 'mixings';
            @import 'variables';
            @import 'overrides';
            @import 'functions';
        `,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
