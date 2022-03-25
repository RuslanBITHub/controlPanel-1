module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/control-panel/'
    : '/'
}