module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].js'
    }
}

const HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")

module.exports = {
  mode: 'development',
  entry: './src/root/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true, 
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    alias: {
      Canvas: path.resolve(__dirname, "./src/root/Canvas/"),
      Component: path.resolve(__dirname, "./src/component/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
}