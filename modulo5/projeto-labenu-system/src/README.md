# Projeto Labenu-System

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

#### CREATE CLASSROOM

-   Method: `POST`
-   Path: `/classrooms`
-   Input: `name(string), module(string)`
-   Output: uma nova turma criada. Para isso é necessári passar o "name" e "module" via body.

#### GET ACTIVE CLASSROOMS

-   Method: `GET`
-   Path:`/classrooms`
-   Output: uma lista com todas as classes ativas.

#### UPDATE MODULE OF CLASSROOM

-   Method: `PUT`
-   Path: `/classrooms/:classroomId`
-   Input: `module(string)`
-   Output: atualização do modulo de determinada turma.

#### CREATE STUDENT

-   Method: `POST`
-   Path:`/students`
-   Input: `name(string), email(string), birthdate(string - ano/mês/dia) e classroom_is(string)`
-   Output: cria um novo estudante.

#### GET STUDENT BY NAME

-   Method: `GET`
-   Path:`/students/:name`
-   Output: todas as informações referente ao nome do aluno que foi passado via params.
e caso não seja passado nenhum params, retorna toda lista de alunos.

#### UPDATE CLASSROOM OF STUDENT

-   Method: `PUT`
-   Path:`/classrooms/students/:studentId`
-   Output: atualização da classe do aluno de acordo com o id do estudante passado via params.

#### GET ALL STUDENTS OF CLASSROOM

-   Method: `GET`
-   Path:`/students/classrooms/:classroom_id`
-   Output: todos alunos que pertecem a classe passado via params.

## Documentação:
[Postman](https://documenter.getpostman.com/view/21139411/UzXVtZLo)
[Heroku] (https://git.heroku.com/carol-labenu-system.git)

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
