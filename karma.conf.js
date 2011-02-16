module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      './test/index.js'
    ],
    preprocessors: {
      './test/index.js': ['webpack', 'sourcemap'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: 2,
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true,
    },
  })
}
