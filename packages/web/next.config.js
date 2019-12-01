const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const copyFile = promisify(fs.copyFile);

// plugins and configuration
const withPlugins = require('next-compose-plugins');
const withConfig = require("next-config");
const withFonts = require("next-fonts");
const images = require("remark-images");
const emoji = require("remark-emoji");
const withOptimizedImages = require("next-optimized-images");
const withMDX = require("@next/mdx")({
  // parse mdx files
  extension: /\.mdx?$/,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  options: {
    mdPlugins: [images, emoji]
  }
});
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')({
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
});

// next.js configuration
const nextConfig = {
  // copy static assets
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) {
      return defaultPathMap;
    }
    await copyFile(
      path.join(dir, "src/modules/serviceworker/s-worker.js"),
      path.join(outDir, "s-worker.js")
    );
    return defaultPathMap;
  },
  // custom webpack configuration
  webpack: function (config, { dev }) {
    config.node = {
      fs: "empty"
    };
    // // parse yaml so we can use config.yml
    // config.module.rules.push({
    //   test: /\.ya?ml$/,
    //   use: "js-yaml-loader"
    // });
    return config;
  }
};

module.exports = withPlugins([
  withConfig,
  withFonts,
  withOptimizedImages,
  withMDX,
  withBundleAnalyzer
], nextConfig);