import { Request, Response } from "express";
import * as service from "./service";

export async function getTodos(req: Request, res: Response) {
  const todos = await service.getTodos();
  res.json(todos);
}

export async function createTodo(req: Request, res: Response) {
  const { title } = req.body;
  const todo = await service.createTodo(title);
  res.json(todo);
}

export async function updateTodo(req: Request, res: Response) {
  const id = Number(req.params.id);
  const updated = await service.updateTodo(id, req.body);
  res.json(updated);
}

export async function deleteTodo(req: Request, res: Response) {
  const id = Number(req.params.id);
  await service.deleteTodo(id);
  res.sendStatus(204);
}
