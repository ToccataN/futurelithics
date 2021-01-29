const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config
  }
})

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      })

    return config
  }
}