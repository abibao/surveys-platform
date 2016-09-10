var webpack = require('webpack')

// postcss plugins
var path = require('path')
var cssimport = require('postcss-import')
var customProperties = require('postcss-custom-properties')
var autoprefixer = require('autoprefixer')
var csswring = require('csswring')
var cssnested = require('postcss-nested')

module.exports = {
  entry: {
    app: ['./src/reader/application/index.js']
  },
  output: {
    path: path.join(__dirname, '/.build/reader/'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
  },
  debug: true,
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'babel' } }
    ],
    loaders: [
      { test: /\.ts|\.tsx$/, exclude: /node_modules/, include: /src\/reader/, loader: 'ts-loader', query: { cacheDirectory: true, presets: ['es2015', 'react'] } },
      { test: /\.tag$/, exclude: /node_modules/, include: /src\/reader/, loader: 'babel-loader', query: { cacheDirectory: true, presets: ['es2015'] } },
      { test: /\.js|\.jsx$/, exclude: /node_modules/, include: /src\/reader/, loader: 'babel-loader', query: { cacheDirectory: true, presets: ['es2015', 'react'] } },
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, exclude: /node_modules/, loader: 'file-loader' }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  postcss: [cssimport, cssnested, customProperties, autoprefixer, csswring],
  devServer: {
    contentBase: './.build/reader/'
  }
}
