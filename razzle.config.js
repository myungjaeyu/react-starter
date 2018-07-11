'use strict'

const razzleSass = require('./config/razzle-sass')
const razzleVendorBundle = require('./config/razzle-vendor-bundle')

module.exports = {
  modify(defaultConfig, { target, dev }, webpack) {
    let config = defaultConfig

    // remove sourcemap file in production
    config.devtool = dev ? config.devtool : ''

    config = razzleSass(config, { target, dev }, webpack)
    config = razzleVendorBundle(config, { target, dev }, webpack)

    return config
  },
}
