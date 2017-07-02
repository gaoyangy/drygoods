// see http://vuejs-templates.github.io/webpack for documentation.

var path = require('path')
var api = {
    mockhttp: "http://localhost:3000", //本地模拟数据
    testhttp: "http://localhost:3001", //访问后台数据
    produchttp: "http://119.23.230.185:3001" //访问线上后端数据
}
module.exports = {
    build: {
        // env: require('./prod.env'),
        // // index: path.resolve(__dirname, '../../dist/index.html'),
        // // assetsRoot: path.resolve(__dirname, '../../dist'),
        // index: path.resolve(__dirname, '../../gaoyangy.github.io/index.html'),
        // assetsRoot: path.resolve(__dirname, '../../gaoyangy.github.io'),
        // assetsSubDirectory: 'static',
        // assetsPublicPath: '/',
        // productionSourceMap: true,

        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionSourceMap: false,

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 1080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            // '/': {
            //     target: api.mockhttp,
            //     changeOrigin: true
            // },
            '/list': {
                target: "http://localhost:3000",
                changeOrigin: false
            }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}