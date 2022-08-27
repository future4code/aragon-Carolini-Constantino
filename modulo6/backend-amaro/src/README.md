# Amaro Fashion Back-end Challenge

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amaro_logo.png" width="320" alt="Amaro Fashion Logo" />
</p>

## Description

O projecto simula a API do loja Amaro, onde o cliente pode realizar seu cadastro, logar, realizar requisições de busca de produtos e, caso seja um administrador, também pode criar novos produtos e deletar produtos.

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
-   Path: `/users/signup`
-   Input: `name(string), email(string) e password(string)`
-   Output: mensagem de cadastro realizado e token

#### LOGIN

-   Method: `GET`
-   Path: `/users/login`
-   Input: `email(string) e password(string)`
-   Output: mensagem de login realizado e token

#### GET ALL PRODUCTS

-   Method: `GET`
-   Path:`/products/?order=price&sort=desc`
-   Output: uma lista com todos produtos.

#### SEARCH PRODUCT

-   Method: `GET`
-   Path:`/products/busca?q=moletom`
-   Output: produtos de acordo com o que é solicitado na busca.


#### GET ALL PRODUCTS BY TAG

-   Method: `GET`
-   Path:`/products/tags/neutro`
-   Output: todos produtos que possuem determinada tag. 

#### CREATE PRODUCT

-   Method: `POST`
-   Path:`/products`
-   Input: `name(string), tags(array de string) e price(number)`
-   Output: retorna o produto criado.

#### DELETE PRODUCT

-   Method: `DELETE`
-   Path: `\products\:id 
-   Input: _nenhum_
-   Output: mensagem de user deleta.

## Documentação:
[Postman](https://documenter.getpostman.com/view/21139411/VUqypESV)

## Testeunitário:

<img src ="test.jpg">

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