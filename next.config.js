const path = require('path');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Agregar fallback para path y util
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: require.resolve("path-browserify"),
      util: require.resolve("util/"),
    };

    // Importante: devuelve la configuración modificada
    return config;
  },
  resolve: {
    fallback: {
      path: require.resolve("path-browserify")
    }
  }

};
