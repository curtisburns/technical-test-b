/* global describe, it, expect, api, beforeEach */

it('should return a 200 status', done => {
  api.get('/api/data')
  .end((err, res) => {
    expect(res.status).to.eq(200);
  });
  done();
});

it('should return an array', done => {
  api.get('/api/data')
  .end((err, res) => {
    // Remember res.body not res.data
    expect(res.body).to.be.an('array');
  });
  done();
});

it('should be an array of objects', done => {
  api.get('/api/data')
  .end((err, res) => {
      res.body.forEach(rowPacket => {
        expect(rowPacket).to.be.an('object');
      });
    expect(res.body).to.be.an('array');
  })
  done();
})

it('should be an array of objects that have the property Field, that is a string', done => {
  api.get('/api/data')
  .end((err, res) => {
    res.body.forEach(rowPacket => {
      rowPacket.should.have.property('Field').that.is.a('string');
    });
    expect(res.body).to.be.an('array');
  })
  done();
})

