import { Router } from "express";
import * as controller from "./controller";

const toDosRouter = Router();

toDosRouter.get("/", controller.getTodos);
toDosRouter.post("/", controller.createTodo);
toDosRouter.put("/:id", controller.updateTodo);
toDosRouter.delete("/:id", controller.deleteTodo);

export default toDosRouter;
