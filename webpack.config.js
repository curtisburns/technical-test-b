var path = require("path");
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
  }
};

module.exports = config;