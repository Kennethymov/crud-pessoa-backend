import * as sinon from 'sinon';
import chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import assert = require('assert');

import app from '../app';
import Users from '../database/models/User';
import UserService from '../services/UserService';

import { Response } from 'superagent';
import { newUser,
  newUserCreated,
  newUserWrong,
  user,
  users,
  userAlready,
  userUpdatedEmail,
  sendUpdateEmail,
  userUpdatedName,
  sendUpdateName,
  userUpdatedAll,
  sendUpdateAll, 
  emailWrong} from './user.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('1 - Testa rota POST /pessoa', () => {

  let chaiHttpResponse: Response;
  beforeEach(sinon.restore);

  beforeEach(async () => {
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
    sinon.stub(Users, "findOne").resolves();
    const response = await chai.request(app).post('/pessoa').send(newUser);
    expect(response.status).to.be.equal(201);
    assert.deepEqual(response.body, newUserCreated);
  });

  it('Testa que nao é possivel cadastrar uma pessoa com email invalido', async () => {
    const response = await chai.request(app).post('/pessoa').send(newUserWrong);
    expect(response.status).to.be.equal(400);
    assert.deepEqual(response.body, {
      message: '"email" must be a valid email',
    });
  });

  it('Testa que nao é possivel cadastrar uma pessoa com email existente', async () => {
    sinon.stub(Users, "findOne").resolves(user as Users);
    const response = await chai.request(app).post('/pessoa').send(userAlready);
    expect(response.status).to.be.equal(409);
    assert.deepEqual(response.body, {
      message: 'Este email já foi cadastrado!',
    });
  });
  
});


describe('2 - Testa rota GET /pessoas', () => {

  let chaiHttpResponse: Response;
    
  beforeEach(sinon.restore);

  beforeEach(async () => {
    sinon
      .stub(Users, "findAll")
      .resolves([...users as Users[]]);
  });

  after(()=>{
    (Users.findAll as sinon.SinonStub).restore();
  })

  it('Testa se a rota retorna todas as pessoas cadastradas', async () => {
    const response = await chai.request(app).get('/pessoas').send();
    expect(response.status).to.be.equal(200);
    assert.deepEqual(response.body, users);
  });
});

describe('3 - Testa rota GET /pessoa/:id', () => {

  let chaiHttpResponse: Response;
    
  beforeEach(sinon.restore);

  beforeEach(async () => {
    sinon
      .stub(Users, "findOne")
      .resolves(user as Users);
  });

  after(()=>{
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('Testa se a rota retorna o usuario correto passando id = 1', async () => {
    const response = await chai.request(app).get('/pessoa/1').send();
    expect(response.status).to.be.equal(200);
    assert.deepEqual(response.body, user);
  });
});

describe('4 - Testa rota PUT /pessoa/:id', () => {

  let chaiHttpResponse: Response;
    
  beforeEach(sinon.restore);

  beforeEach(async () => {
    sinon
      .stub(Users, "update")
      .resolves();
  });

  after(()=>{
    (Users.update as sinon.SinonStub).restore();
  })

  it('Testa se possivel alterar um usuario passando so o email', async () => {
    sinon.stub(Users, "findOne")
      .onFirstCall().resolves()
      .onSecondCall().resolves(userUpdatedEmail as Users);
    
    const response = await chai.request(app).put('/pessoa/1').send(sendUpdateEmail);
       
    expect(response.status).to.be.equal(200);
    assert.deepEqual(response.body, userUpdatedEmail);
  });

  it('Testa se possivel alterar um usuario passando so o nome', async () => {
    sinon.stub(Users, "findOne")
    .onFirstCall().resolves()
    .onSecondCall().resolves(userUpdatedName as Users);
    
    const response = await chai.request(app).put('/pessoa/1').send(sendUpdateName);
    
    expect(response.status).to.be.equal(200);
    assert.deepEqual(response.body, userUpdatedName);
  });

  it('Testa se possivel alterar um usuario passando todos os dados', async () => {
    sinon.stub(Users, "findOne")
    .onFirstCall().resolves()
    .onSecondCall().resolves(userUpdatedAll as Users);
    
    const response = await chai.request(app).put('/pessoa/1').send(sendUpdateAll);
    
    expect(response.status).to.be.equal(200);
    assert.deepEqual(response.body, userUpdatedAll);
  });

  it('Testa que não possivel alterar um usuario passando um email invalido', async () => {
    const response = await chai.request(app).put('/pessoa/1').send(emailWrong);
   
    expect(response.status).to.be.equal(400);
    assert.deepEqual(response.body, {
      message: '"email" must be a valid email',
    });
  });
});

describe('5 - Testa rota DELETE /pessoa/:id', () => {

  let chaiHttpResponse: Response;
    
  beforeEach(sinon.restore);

  beforeEach(async () => {
    sinon
      .stub(Users, "destroy")
      .resolves();
  });

  after(()=>{
    (Users.destroy as sinon.SinonStub).restore();
  })

  it('Testa que é possivel deletar um usuario pelo id', async () => {
    sinon.stub(Users, "findOne").resolves(user as Users);
    const response = await chai.request(app).delete('/pessoa/1').send();
    expect(response.status).to.be.equal(200);
  });
});