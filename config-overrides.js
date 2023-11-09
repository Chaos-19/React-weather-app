const webpack = require("webpack");

module.exports = function override(config, env) {
  // Add fallbacks for missing core modules
  config.resolve.fallback = {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    path: require.resolve("path-browserify"),
    os: require.resolve("os-browserify/browser"),
    buffer: require.resolve("buffer/"),
  };

  // Return the modified config
  return config;
};
