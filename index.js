const debug = require('debug')('yeps:bodyparser');
const parse = require('yeps-body');

module.exports = (opts = {}) => async (context) => {
  debug('Body parser created');

  let body = {};

  try {
    body = await parse.any(context.req, opts);
  } catch (error) {
    debug(error);

    if (context.logger) {
      context.logger.error(error);
    }
  }

  debug(body);

  context.request = context.request || {};
  context.request.body = Object.assign({}, body, context.request.body);
};
