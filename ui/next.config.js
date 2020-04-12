// next.config.js
const path = require('path')

const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')

const tsconfig = require('./tsconfig.json')
const tsPaths = tsconfig.compilerOptions.paths

module.exports = withPlugins([[withSass]], {
  /* config options here */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.resolve.extensions = [".ts", ".tsx", ".js", ".css", ".scss"]
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })
      
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

    Object.keys(tsPaths).forEach(function (key) {
      const newKey = key.replace('/*', '')
      // this only support single src aliases, not arrays of aliases
      // might need to upgrade later if it's really that necessary
      const value = tsPaths[key][0].replace('/*', '')
      config.resolve.alias[newKey] = path.join(__dirname, value)
    })

    return config
  }
})