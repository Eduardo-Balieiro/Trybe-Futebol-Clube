import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import TeamsModel from '../database/models/teams.model';
import TeamsService from '../database/services/teams.service';
import { mockFindAll, mockFindByPk } from './mocks/mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('2)model test teams endpoint', () => {
    it('1}model function findAll returns correctly', async () => {
      sinon.stub(TeamsModel, 'findAll').resolves(mockFindAll);
      const teams = await TeamsService.findAll();

      expect(teams).to.be.deep.equal(mockFindAll);
      expect(teams).to.be.an('array');
    });
  
    it('2}model function findByPk returns correctly', async () => {
      sinon.stub(TeamsModel, 'findByPk').resolves(mockFindByPk);
      const team = await TeamsService.findByPk('13');

      expect(team).to.be.deep.equal(mockFindByPk);
      expect(team).to.be.an('object');
    });
  
  });