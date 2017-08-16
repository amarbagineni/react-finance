module.exports = {

  devtool: 'inline-source-map', // one of the tools webpack gives, for better debuggin the code

  entry: ['./main.js'],

  output: {

    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/' // The relative path, when the public folder needs to be included
  },

  module: {
    // we define different loaders for different types of files
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader', // to complie jsx and es6 into js from the js files
        exclude: /node_modules/,
        query: { // this is a replacement for setting up the .babelrc file,
          //we do have a .babelrc file, just putting this here for remembering sake
          presets: ['react', 'es2015']
        }
      } // End of specifying js files handling
    ]
  }
}


/* Webpack also has a thing called devtools ..
 eg =-> 'devtool' .. so devtool: 'inline-source-map'
