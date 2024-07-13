const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    libraryTarget: 'module',
    clean: true,
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
    /** 1. ts-loader : type check + transpile + d.ts(optional) */ 
    {
      test: /.ts$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
    },
    /** 2. babel-loader : transpile */
    // {
    //   test: /.ts$/,
    //   include: [
    //     path.resolve(__dirname, 'src')
    //   ],
    //   exclude: [
    //     path.resolve(__dirname, 'node_modules'),
    //   ],
    //   loader: 'babel-loader',
    // },
    /** 3. esbuild-loader : transpile, `build time is shortest!` */
    // {
    //   test: /\.ts$/,
    //   exclude: /node_modules/,
    //   loader: 'esbuild-loader',
    //   options: {
    //     loader: 'ts', // target file extension
    //     target: 'esnext' // compile to javascript version
    //   }
    // }
  ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
			"@": path.resolve(__dirname, "./src"),
		}
  },
};