import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { getUser } from "./endpoints/getUser";
import { getTasks } from "./endpoints/getTasks";
import { userResponsibleTask } from "./endpoints/userResponsibleTask";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Siga o exemplo do ping acima e monte seus endpoints abaixo!
app.get("/users", getUser)

app.get("/tasks", getTasks)

app.get("/tasks/:taskId/users", userResponsibleTask)