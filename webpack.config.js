const webpack = require('webpack');
const path = require('path');

const SRC_FILE = path.join(__dirname, '/index.jsx');
const DIST_DIR = __dirname

const config = {
  devtool: 'inline-sourcemap',
  resolve: {
    root: __dirname,
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  entry: SRC_FILE,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: __dirname,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

module.exports = config;
