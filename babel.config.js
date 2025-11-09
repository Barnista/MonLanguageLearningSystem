module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        ios: '12' // or lower depending on your support needs
      },
      useBuiltIns: 'entry',
      corejs: 3
    }]
  ]

}
