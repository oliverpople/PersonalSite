const path = require('path');
const SRC_DIR = path.join(__dirname, '/react-client/src');
const DIST_DIR = path.join(__dirname, '/react-client/dist');
const webpack = require('webpack');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  module : {
    loaders : [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
       test: /\.(jpg|jpeg|gif|png|svg)$/,
       exclude: /node_modules/,
       loader: "url-loader?limit=1024&name=images/[name].[ext]"   
      },
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', "stage-0", 'react']
       }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
