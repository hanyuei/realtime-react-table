const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: './dist/bundle.js'
  },
  module: {
//    preLoaders: [{
//      test: /\.(js|jsx)?$/,
//      loader: 'eslint',
//      include: path.resolve(__dirname, 'src')
//    }],
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel'}
//    {
//      exclude: /node_modules/,
//      loader: 'babel-loader',
//    },{
//      test: /\.css$/, // Only .css files
//      loader: 'style!css' // Run both loaders
//    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};