var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './src/dist');
var APP_DIR = path.resolve(__dirname, './src');

var config = {
  entry: {
    app: APP_DIR + '/index.js',
    vendor: [       
      'react',
      'react-dom'    
    ],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]-[hash].min.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        include : __dirname,
        loader : 'babel-loader'
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'API_BASE_URL_EXTERNAL': JSON.stringify(process.env.API_BASE_URL_EXTERNAL)
      }
    }),
      new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ]  

};

//Só minifica os arquivos se for produção
if (process.env.NODE_ENV === 'production') {
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');
    var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    });
  
  config.plugins.push(commonsPlugin);
  config.plugins.push(uglifyPlugin);
}

module.exports = config;