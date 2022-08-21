
# Projeto Lama 
 Este projeto tem o intuito de simular um sistema de gestão de um festival de músicas, que neste caso é chamada Labenu Music Awards-Lama. Com ele é possível organizar e centralizar as informações dos shows em um servidor, que então disponibiliza os dados para o website no front-end (que já está criado). Além de controlar os eventos com suas bandas e datas do show, a aplicação também gerencia os ingressos de cada show.

## Instruções
 Para rodar o sistema é necessásio:

#### 1) Criar o arquivo `.env` e configurar com as informações de seu banco de dados:
```
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
```

#### 2) Instalar as dependências:

-   `npm install`:
    Instala todas as dependências listadas no `package.json`.

#### 3) Popular a tabela:

-   `npm run migrations`
    Popula a tabela com dados de usuários.
    _Esse script deve ser executado apenas uma única vez, ou quando você quiser reiniciar a popilação das tabelas iniciais_

#### 4) Executar o projeto:

-   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

### Endpoints:

#### SIGNUP
-   Method: `POST`
-   Path: `/signup`
-   Input: `name(string), email(string) e passaword(string)`

#### LOGIN
-   Method: `POST`
-   Path: `/login`
-   Input: `email(string) e passaword(string)`

#### CREATE SHOW
-   Method: `POST`
-   Path: `/shows`
-   Headers: `token`
-   Input: `band(string) e starts_at`

#### GET SHOWS
-   Method: `GET`
-   Path:`/shows`
-   Headers: `token`
-   Output: uma lista com todos shows

#### CREATE RESERVATION
-   Method: `POST`
-   Path: `/shows/tickets/:show_id`
-   Headers: `token`

#### DELETE POST
-   Method: `DELETE`
-   Path: `/shows/ticket/:show_id`
-   Headers: `token`

## Documentação:
[Testes da API](file:///C:/Users/f02325070077/Desktop/aragon-Carolini-Constantino/modulo5/projeto-lama/coverage/lcov-report/src/business/index.html)
[Postman](https://documenter.getpostman.com/view/21139411/VUqptHi8)

## Stack utilizada

- NodeJS
- TypeScript
- SQL
- Knex
- Express
- Cors
- Jest

## Programas utilizados

- VSCode
- MySQL Workbench
- Postman API Platform
- Heroku: Cloud Application Platform