const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'skyjo-game.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'skyjo-styles.css', to: 'skyjo-styles.css' },
        { from: 'skyjo-standalone.html', to: 'index.html' },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true,
    },
    compress: true,
    port: 9001,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*.ts', 'skyjo-styles.css', 'skyjo-standalone.html'],
    client: {
      overlay: true,
      progress: true,
    },
    devMiddleware: {
      writeToDisk: true,
      index: true,
      publicPath: '/',
    },
    headers: {
      'Cache-Control': 'no-store',
    },
  },
}; 