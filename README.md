# Projeto realizado para fase Teste da Simbiose

Consiste em um CRUD dos seguintes dados referentes a uma pessoa: nome, email, data de nascimento. 

* Construída com Node.js, Express, Typescript, Sequelize com MySQL e Docker
* Utilizando as práticas do REST
* Aplicada Arquitetura de Software, com as camadas de Modelo, de Serviço e de Controladores

- OBS.: É necessário a instalação do Docker para rodar a aplicação(versões utilizadas - Docker 20.10.18 e docker-compose 1.29.2). Caso queira rodar localmente, é preciso configurar o arquivo .env de acordo com as variaves de ambiente no .env.sample.

### Instruções

- Para rodar o repositório, realize o clone do projeto e utilize os comandos a seguir para inicializar o Docker, instalar as dependências e configurar o banco de dados:

```
1 - npm install // para instalar as dependências;
2 - npm run build // para construir a aplicação;
3 - docker-compose up --build // para inicialicar o docker, fazer o build e iniciar a aplicação;
4 - docker-compose down // para parar completamente a aplicação;
```

### Testes

- Este projeto possui testes unitarios. Para roda-los utilize o comando:

```
npm test
```

### Endpoints

#### Usuário

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Cria um novo usuário e retorna o usuário cadastrado  | http://localhost:3001/pessoa |
| `GET` | Retorna os dados de um usuário específico | http://localhost:3001/pessoa/:id |
| `PUT` | Atualiza os dados de um usuário específico | http://localhost:3001/pessoa/:id |
| `DELETE` | Deleta os dados do usuário através do id | http://localhost:3001/pessoa/:id |
| `GET` | Retorna todos os usuários cadastrados | http://localhost:3001/pessoas |


Na requisição POST, é necessário informar todos os dados do usuário no formato a seguir:

```
{
  "name": "Usuário Exemplo",
  "email": "usuario-exemplo@email.com",
  "birthDate": "YYYY-MM-DD"
}
```

Na requisição PUT, é necessário informar pelo menos um dos dados do usuário no formato a seguir:

```
{
  "name": "Usuário Exemplo",
  "email": "usuario-exemplo@email.com",
  "birthDate": "YYYY-MM-DD"
}
```
