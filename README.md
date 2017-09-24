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

    const options = {};
    
    app.all([
        bodyparser(options)
    ]);
    
    app.then(async ctx => {
        
        ctx.res.statusCode = 200;
        ctx.res.end(JSON.stringify(ctx.request.body));
    
    });

## Options

  * `limit` - the limit in bytes
  * `length` and `expected` - the expected length of the stream
  * `received` - the received bytes
  * `encoding` - the invalid encoding
  * `status` and `statusCode` - the corresponding status code for the error
  * `type` - the error type
  
Example:

    const options = {
        limit: '1mb'
    };
    
    app.all([
        bodyparser(options)
    ]);
  
See [raw-body](https://github.com/stream-utils/raw-body) to get more details
                
#### [YEPS documentation](http://yeps.info/)
