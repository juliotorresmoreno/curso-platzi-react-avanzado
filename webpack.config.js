const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV !== 'production'
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

/**
 * @typedef {import('webpack').WebpackOptionsNormalized} WebpackOptionsNormalized
 */

/**
 * @type {WebpackOptionsNormalized}
 */
const configuration = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      filename: 'manifest.webmanifest',
      name: 'PetGram',
      description: 'Tu app preferida para encontrar esas mascotas que tanto te encantan',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: /https:\/\/petgram-server.midudev.now.sh/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  mode: isDev ? 'development' : 'production',
  cache: false,
  devServer: {
    compress: true,
    port: 9000,
    host: '127.0.0.1',
    static: path.resolve(__dirname, './public')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
}

module.exports = configuration
