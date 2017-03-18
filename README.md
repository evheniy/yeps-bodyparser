# YEPS body parser

Parse request bodies

[![NPM](https://nodei.co/npm/yeps-bodyparser.png)](https://npmjs.org/package/yeps-bodyparser)

[![npm version](https://badge.fury.io/js/yeps-bodyparser.svg)](https://badge.fury.io/js/yeps-bodyparser)
[![Build Status](https://travis-ci.org/evheniy/yeps-bodyparser.svg?branch=master)](https://travis-ci.org/evheniy/yeps-bodyparser)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-bodyparser/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-bodyparser?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-bodyparser/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-bodyparser/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-bodyparser)

[![Dependency Status](https://david-dm.org/evheniy/yeps-bodyparser.svg)](https://david-dm.org/evheniy/yeps-bodyparser)
[![devDependency Status](https://david-dm.org/evheniy/yeps-bodyparser/dev-status.svg)](https://david-dm.org/evheniy/yeps-bodyparser#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-bodyparser)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-bodyparser/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-bodyparser.svg)](https://github.com/evheniy/yeps-bodyparser/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-bodyparser.svg)](https://github.com/evheniy/yeps-bodyparser/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-bodyparser.svg)](https://github.com/evheniy/yeps-bodyparser/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-bodyparser.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

  npm i -S yeps-bodyparser
  
## How to use

    const App = require('yeps');
    const bodyparser = require('yeps-bodyparser');
    const app = new App();
    
    app.all([
        bodyparser()
    ]);
    
    app.then(async ctx => {
        
        ctx.res.statusCode = 200;
        ctx.res.end(JSON.stringify(ctx.request.body));
    
    });
                
## Links

* [yeps](https://github.com/evheniy/yeps) - YEPS
* [yeps-promisify](https://github.com/evheniy/yeps-promisify) - YEPS kernel
* [yeps-benchmark](https://github.com/evheniy/yeps-benchmark) - performance comparison koa2, express and node http
* [yeps-router](https://github.com/evheniy/yeps-router) - YEPS promise based router
* [yeps-error](https://github.com/evheniy/yeps-error) - YEPS 404/500 error handler
* [yeps-redis](https://github.com/evheniy/yeps-redis) - YEPS promise based redis client
* [yeps-mysql](https://github.com/evheniy/yeps-mysql) - YEPS promise based mysql client
* [yeps-boilerplate](https://github.com/evheniy/yeps-boilerplate) - YEPS app boilerplate
* [yeps-express-wrapper](https://github.com/evheniy/yeps-express-wrapper) - YEPS express wrapper
* [yeps-cors](https://github.com/evheniy/yeps-cors) - YEPS CORS
* [yeps-body](https://github.com/evheniy/yeps-body) - YEPS body parser