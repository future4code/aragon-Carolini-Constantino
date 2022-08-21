# Projeto Labook-Backend
O Labook corresponde a um sistema de uma rede social conde simula a conexão e interação entre seus mais diversos usuários. As pessoas poderão criar, deletar, curtir e descurtir publicações.

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

#### CREATE POST
-   Method: `POST`
-   Path: `/posts`
-   Headers: `token`
-   Input: `content(string)`

#### GET POSTS
-   Method: `GET`
-   Path:`/posts`
-   Headers: `token`
-   Output: uma lista com todos posts

#### DELETE POST
-   Method: `DELETE`
-   Path: `/likes`
-   Headers: `token`
-   Input: `id(string)`

#### LIKE POST
-   Method: `PUT`
-   Path:`/posts/likes`
-   Headers: `token`
-   Input: `id(string)`


#### DISLIKE POST
-   Method: `DELETE`
-   Path: `/likes`
-   Headers: `token`
-   Input: `id(string)`

## Documentação:
[Postman](https://documenter.getpostman.com/view/21139411/VUjSGjFw)
[Heroku](https://carol-labook.herokuapp.com/ping)

## Stack utilizada

- NodeJS
- TypeScript
- SQL
- Knex
- Express
- Cors

## Programas utilizados

- VSCode
- MySQL Workbench
- Postman API Platform
- Heroku: Cloud Application Platform