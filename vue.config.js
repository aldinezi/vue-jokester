// eslint-disable-next-line
const webpack = require('webpack');

const themeName = process.env.npm_config_theme || 'default';


module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        THEME: JSON.stringify(themeName),
      }),
    ],
  },
};
