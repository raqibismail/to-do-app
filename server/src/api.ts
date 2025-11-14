import { Router } from "express";
import toDosRouter from "./modules/todos/route";

const api = Router();

api.use("/todos", toDosRouter);

export default api;