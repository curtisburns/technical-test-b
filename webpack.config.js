var path = require("path");


const CopyWebpackPlugin = require('copy-webpack-plugin');
const CopyWebpack = new CopyWebpackPlugin([
  { from: './src/assets', to: 'assets' }
]);

var config = {
  mode: 'development',
  entry: ["./src/app.tsx"],
  output: {
    filename: "bundle.js",
    publicPath: "/src/",
    path: path.join(__dirname, "src/dist/build/")
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
      { test: /\.scss$/, 
        loader: ['style-loader', 'css-loader', 'sass-loader'] 
      }
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
  plugins: [CopyWebpack]
};

module.exports = config;