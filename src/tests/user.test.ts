import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import app from '../app';
import Users from '../database/models/User';
import UserController from '../controllers/UserController';

import { Response } from 'superagent';
import { newUser, newUserCreated, newUserWrong, User, userAlready } from './user.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota POST /pessoa', () => {

  let chaiHttpResponse: Response;
  beforeEach(sinon.restore);

  before(async () => {
    sinon
      .stub(Users, "create")
      .resolves({
        ...newUserCreated
      } as Users);
  });

  after(()=>{
    (Users.create as sinon.SinonStub).restore();
  })

  it('Testa uma pessoa cadastrada com sucesso', async () => {
    const response = await chai.request(app).post('/pessoa').send(newUser);
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.equal(newUserCreated);
  });

  it('Testa que nao é possivel cadastrar uma pessoa com email invalido', async () => {
    const response = await chai.request(app).post('/pessoa').send(newUserWrong);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.equal({
      message: 'pessoa não encontrada',
    });
  });

  it('Testa que nao é possivel cadastrar uma pessoa com email existente', async () => {
    const response = await chai.request(app).post('/pessoa').send(userAlready);
    expect(response.status).to.be.equal(409);
    expect(response.body).to.be.equal({
      message: 'Este email já foi cadastrado!',
    });
  });
  
});
