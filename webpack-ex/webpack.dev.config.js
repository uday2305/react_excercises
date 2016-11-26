module.exports = {
  entry: {
  javascript: "./app/app.js",
  html: "./app/index.html"
},
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  devServer: {
    inline: true
  },
  module: {
  loaders: [
    {
      test: /\.jsx?$/,         // Match both .js and .jsx files
      exclude: /node_modules/,
      loader: "babel",
      query:
      {
          presets:['es2015','react']
      }
    },
    {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }
  ],
}
}
