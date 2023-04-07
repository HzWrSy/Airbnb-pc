const path = require('path')

const resolve = pathname =>  path.resolve(__dirname, pathname)

module.exports = {
    devServer: {
        port: 3005
    },
    // webpack配置
    webpack: {
        // 路径别名
        alias: {
            '@': resolve('src'),
            '@c': resolve('src/components'),
            '@u': resolve('src/utils')
        }
    }
}
