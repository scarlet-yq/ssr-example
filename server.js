const Vue = require('vue')
const express = require('express')
const app = express();
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./dist/bundle.server.js')['default'];


// 设置静态文件目录
app.use('/', express.static(__dirname+ '/dist'))

const clientBundleFileUrl = '/bundle.client.js'

app.get('/api/getHomeInfo', (req, res) => {
  res.send('SSR发送请求')
})


// 响应路由请求
app.get('*', (req, res) => {
  const context = {url: req.url}

  createApp(context).then(vm => {
      let state = JSON.stringify(context.state)

      renderer.renderToString(vm, (err, html) => {
        if (err) {
          return res.status(500).end('运行时错误')
        }
        res.send(`
          <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Vue2.0 SSR渲染页面</title>
                    <script>window._INITIAL_STATE_ = ${state}</script>
                    <script src="${clientBundleFileUrl}"></script>
                </head>
                <body>
                <div id="app">${html}</div>
                </body>
            </html>
        `)
      })
  }, err => {
    if (err.code === 404) {
      res.status(404).send('请求页面不存在')
    }
  })
})

app.listen(8000, () => {
  console.log('服务器已启动！')
})