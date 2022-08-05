# Projeto LabenuSystem

O projeto Cookenu refere-se a um sistema backend de um aplicativo que registra usuários, bem como suas receitas. Desta forma, o projeto contém duas entidades, 'user' (usuário) e 'recipe' (receita). Ambas possuem os seguintes código typescript como classes:

### Recipe 

- id em string gerado pela própria aplicação
- title em formato string e representando o nome da receita
- description em formato string e representando a descrição da receita
- created_at em formato Date, gerado pela própria aplicação e representando a data de criação da receita
- updated_at em formato Date, gerado pela própria aplicação e representando a data da última atualização da receita
- creator_id em formato string e representando o id do usuário que criou a receita
### ## User (usuário)

- id em formato string e gerado pela própria aplicação
- nickname em formato string
- email em formato string e único por usuário
- password: senha hasheada em formato string
- role: enum “NORMAL” ou “ADMIN”

## Instruções

### Instalando as dependências:

-   `npm install`:
    Instala todas as dependências listadas no `package.json`.

### Criando o arquivo .env:

Criar o arquivo `.env` e configurar com as informações de seu banco de dados.

```
PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados
```

### Populando a tabela:

-   `npm run migrations`
    Popula a tabela com dados de usuários.
    _Esse script deve ser executado apenas uma única vez_

### Executar o projeto:

-   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

---

### Endpoints:

#### 1. signup

-   Method: `POST`
-   Path: `/users/signup`
-   Input: `name(string), email(string) e password(string)`
-   Output: mensagem de cadastro realizado e token

#### 2. login

-   Method: `GET`
-   Path: `/users/login`
-   Input: `email(string) e password(string)`
-   Output: mensagem de login realizado e token

#### 3. createRecipe

-   Method: `POST`
-   Path:`/recipes`
-   Input: `title(string) e description(string)`
-   Output: mensagem de receita criada e a receita

#### 4. editRecipe

-   Method: `PUT`
-   Path:`/recipe/:idRecipe`
-   Input: `title(string) e description(string)`
-   Output: mensage de receita editada

#### 5. deleteRecipe

-   Method: `DELETE`
-   Path:`/recipe/:idRecipe`
-   Input: _nenhum_
-   Output: mensagem de receita deletada.

#### 6. getRecipe

-   Method: `GET`
-   Path: `/recipe`
-   Input: _nenhum_
-   Output: uma lista com todas as receitas cadastradas ou, caso seja passado o parâmetro de busca (recipe), retorna apenas a receita buscada

### 7. deleteUser

-   Method: `DELETE`
-   Path: `\users\:idUser
-   Input: _nenhum_
-   Output: mensagem de user deleta.

---

### Documentação:

[Postman](https://documenter.getpostman.com/view/21139411/VUjLK6Lq)
[Heroku](https://git.heroku.com/carol-cookenu.git)

---

### Stack utilizada

-   NodeJS
-   TypeScript
-   MySQL
-   Knex
-   Express
-   Cors
-   JsonWebToken
-   Uuid
-   BCrypt

---

### Programas utilizados

-   Git
-   VSCode + extensão REST Client
-   MySQL Workbench
-   Postman API Platform
-   Heroku: Cloud Application Platform

---

[![linkedin](https://www.linkedin.com/in/carolini-constantino-ba338a218/)
