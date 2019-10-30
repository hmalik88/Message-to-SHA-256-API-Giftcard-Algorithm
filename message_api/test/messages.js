process.env.NODE_ENV = 'test';

const CryptoJS = require('crypto-js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app.js');
const should = chai.should();


chai.use(chaiHttp);

describe('Messages', () => {

  describe('POST /messages', () => {
    it('it should post a message', (done) => {
      const req = {message: 'foo'};
      chai.request(server)
          .post('/messages')
          .send(req)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('digest')
            done();
          });
    });
  });
  describe('GET /messages/:hash', () => {
    it('it should GET a message by the hash', (done) => {
      const resp = {message: 'foo'}
      const sha256 = CryptoJS.SHA256(resp.message).toString(CryptoJS.enc.Hex)
      chai.request(server)
          .get('/messages/' + sha256)
          .send(resp)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('foo');
            done();
          });
    });
  });
});

