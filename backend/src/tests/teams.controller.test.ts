import * as chai from 'chai';
// @ts-ignore
// ?
import chaiHttp = require('chai-http');
import { mockGetAll, mockGetById } from './mocks/mocks';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('1)controller test teams endpoint', () => {
  it('1}controller function getAll and HTTP code returns correctly ', async () => {
    const res = await chai.request(app).get('/teams');

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal(mockGetAll);
    expect(res.body).to.be.an('array');
  });

  it('2}controller function getById and HTTP code returns correctly', async () => {
    const res = await chai.request(app).get('/teams/13');

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.deep.equal(mockGetById);
    expect(res.body).to.be.an('object');
  });

});