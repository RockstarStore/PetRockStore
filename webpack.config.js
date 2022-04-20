const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ template: './client/index.html' })],
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './client'),
      publicPath: '/',
    },
    proxy: {
      '/rocks': 'http://localhost:3000',
      '/shop/**': 'http://localhost:3000',
      '/users/**': 'http://localhost:3000',
    },
    port: 8080,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};
