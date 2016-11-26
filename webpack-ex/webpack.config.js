module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "app.js",
    path: __dirname + "/target",
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
    }
  ],
}
}
