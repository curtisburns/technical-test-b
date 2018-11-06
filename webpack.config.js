var path = require("path");
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpack = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
});


const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpack = new CopyWebpackPlugin([
  { from: './src/assets', to: 'assets' }
]);

const HotModuleReplcement = new webpack.HotModuleReplacementPlugin();

var config = {
  mode: 'development',
  entry: './src/app.tsx',
  output: {
    path: path.resolve('public'),
    filename: 'app.js',
    publicPath: '/'
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/,
        loader: ['style-loader', 'css-loader'] 
      },
      { test: /\.scss$/, 
        loader: ['style-loader', 'css-loader', 'sass-loader'] 
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000' }
    ]
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        secure: false
      }
    }
  },
  plugins: [HotModuleReplcement, HtmlWebpack, CopyWebpack]
};

module.exports = config;