import express from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import { createdPerfume } from "./endpoints/createPerfume";
import { getPerfumes } from "./endpoints/getPerfumes";
import { editPerfume } from "./endpoints/editPerfume";
import { deletePerfume } from "./endpoints/deletePerfume";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

app.get("/ping", ping)

app.post("/perfumes", createdPerfume)

app.get("/perfumes", getPerfumes)

app.put("/perfumes/:id", editPerfume)

app.delete("/perfumes/:id", deletePerfume)