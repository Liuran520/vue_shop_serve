const express = require('express')
// 导入包
const compression = require('compression');
const https = require('https')
const fs = require('fs')
// 创建 web 服务器
const app = express()
const options = {
    cert: fs.readFileSync('./full_chain.pem'),
    key: fs.readFileSync('./private.key')
  }
 // 启用中间件(一定要写在托管静态文件之前)
app.use(compression());
// 托管静态资源
app.use(express.static('./dist'))
// 启动 web 服务器
app.listen(8081, () => {
 console.log('web server running at http://127.0.0.1:8081')
})
//启用https协议
// https.createServer(options, app).listen(443)