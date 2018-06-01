const stealTools = require('steal-tools')
process.env.NODE_ENV = 'production'

const buildPromise = stealTools.build({
  config: __dirname + '/package.json!npm'
}, {
  bundleAssets: true,
  minify: false
})
