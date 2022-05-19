const path = require('path')
const express = require('express')

const app = express()

app.use('/', express.static(path.resolve(__dirname, '../dist')))

const server = app.listen(3001, '0.0.0.0', function () {
  const host = server.address().address
  const port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
