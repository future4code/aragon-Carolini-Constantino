import knex from "knex";
import dotenv from "dotenv";
// Aqui é que faz a configuração de conexão com o API

dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      multipleStatements: true
   },
});

export default connection