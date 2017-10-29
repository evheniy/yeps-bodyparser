const zlib = require('zlib');
const App = require('yeps');
const chai = require('chai');
const chaiHttp = require('chai-http');
const srv = require('yeps-server');
const bodyParser = require('..');

const { expect } = chai;

chai.use(chaiHttp);
let app;
let server;

describe('YEPS bodyparser test', async () => {
  beforeEach(() => {
    app = new App();
    app.then(bodyParser());
    server = srv.createHttpServer(app);
  });

  afterEach(() => {
    server.close();
  });

  it('should test request without body', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end();
    });

    await chai.request(server)
      .get('/')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should parse valid form body', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .type('form')
      .send({ foo: { bar: 'baz' } })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{"foo":{"bar":"baz"}}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should parse valid json', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .send({ foo: 'bar' })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{"foo":"bar"}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should parse valid text', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .set('content-type', 'text/plain')
      .send('text')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{"0":"t","1":"e","2":"x","3":"t"}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should parse application/json-patch+json', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .type('application/json-patch+json')
      .send(JSON.stringify([{ op: 'replace', path: '/foo', value: 'bar' }]))
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{"0":{"op":"replace","path":"/foo","value":"bar"}}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should parse application/vnd.api+json', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .type('application/vnd.api+json')
      .send(JSON.stringify({ posts: '1' }))
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{"posts":"1"}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should parse application/csp-report', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .type('application/csp-report')
      .send(JSON.stringify({ posts: '1' }))
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{"posts":"1"}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should parse application/ld+json', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .type('application/ld+json')
      .send(JSON.stringify({ posts: '1' }))
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{"posts":"1"}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should parse html as text', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .set('Content-Type', 'text/html')
      .send('<h1>html text</ht>')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should inflate gzip', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    const json = JSON.stringify({ foo: 'bar' });

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    const request = new Promise((resolve, reject) => {
      const req = chai.request(server)
        .post('/')
        .type('json')
        .set('Content-Encoding', 'gzip');

      req.write(zlib.gzipSync(json));
      req.end((err, res) => {
        isTestFinished2 = true;
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });

    const res = await request;

    expect(res).to.have.status(200);
    expect(res.text).to.be.equal('{"foo":"bar"}');

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should inflate deflate', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    const json = JSON.stringify({ foo: 'bar' });

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    const request = new Promise((resolve, reject) => {
      const req = chai.request(server)
        .post('/')
        .type('json')
        .set('Content-Encoding', 'deflate');

      req.write(zlib.deflateSync(json));
      req.end((err, res) => {
        isTestFinished2 = true;
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });

    const res = await request;

    expect(res).to.have.status(200);
    expect(res.text).to.be.equal('{"foo":"bar"}');

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should pass-through identity', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    app.then(async (ctx) => {
      isTestFinished1 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .set('Content-Encoding', 'identity')
      .send({ foo: 'bar' })
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{"foo":"bar"}');
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
  });

  it('should test error', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;
    let isTestFinished3 = false;

    app.all([
      async (ctx) => {
        ctx.logger = {
          error(err) {
            isTestFinished1 = true;
            expect(err).is.not.undefined;
            return err;
          },
        };
      },
      bodyParser(),
    ]);

    app.then(async (ctx) => {
      isTestFinished2 = true;

      ctx.res.statusCode = 200;
      ctx.res.end(JSON.stringify(ctx.request.body));
    });

    await chai.request(server)
      .post('/')
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.be.equal('{}');
        isTestFinished3 = true;
      });

    expect(isTestFinished1).is.true;
    expect(isTestFinished2).is.true;
    expect(isTestFinished3).is.true;
  });
});
