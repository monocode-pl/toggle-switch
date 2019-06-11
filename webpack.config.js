module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "index.js",
    libraryTarget: "umd"
  },
  externals: ['angular'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      }
    ]
  },
  devtool: "source-map"
};