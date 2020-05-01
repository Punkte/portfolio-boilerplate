const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(sass|scss)$/,
    use: ['resolve-url-loader'],
    include: path.resolve(__dirname, '../')
  });
  config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),)
  return config;
};