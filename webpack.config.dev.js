var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './src/dist');
var APP_DIR = path.resolve(__dirname, './src');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
      }      
    ]
  },
  
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'API_BASE_URL_EXTERNAL': JSON.stringify(process.env.API_BASE_URL_EXTERNAL)
      },
    }),
      new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;