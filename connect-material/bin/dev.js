/* jshint node: true */
'use strict';
var express = require('express'),
  proxy = require('express-http-proxy'),
  Stubby = require('stubby').Stubby,
  yaml = require('read-yaml'),
  dev = express(),
//proxy
  apiProxy = proxy('127.0.0.1:1986', {
    forwardPath: function (req) {
      return require('url').parse(req.url).path;
    }
  }),
  server, mockService;
//start mock service
mockService = new Stubby();
mockService.start({
  stubs: 1986,
  mute: false,
  data: yaml.sync('./spec/stub/training.yml')

});
//index HTML
dev.use(express.static('./'));
//API proxy
dev.use('/api/v2/', apiProxy);
//start dev app
server = dev.listen(1985, function () {
  var host = server.address().address,
    port = server.address().port;
  console.log('IPL app listening at http://%s:%s', host, port);
});
    