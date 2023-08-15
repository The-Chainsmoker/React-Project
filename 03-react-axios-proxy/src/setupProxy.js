/**
 * 代理低版本使用这个
 * const proxy = require('http-proxy-middleware')
 **/

/**
 * 代理高版本使用这个
 * const { createProxyMiddleware } = require('http-proxy-middleware');
 **/

/**
 * 如果两种都不行先安装 npm install http-proxy-middleware,在重复以上操作
 */

const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {
      // 遇见/api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000', //请求转发给 http://localhost:5000
      changeOrigin: true, //控制服务器收到的请求头中Host的值，true值:Host为 http://localhost:5000，false值:Host为 http://localhost:3000
      pathRewrite: {
        '^/api1': '',
      },
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': '',
      },
    })
  )
}
