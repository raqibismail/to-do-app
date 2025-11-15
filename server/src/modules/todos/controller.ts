import { Request, Response } from "express";
import * as service from "./service";

export async function getTodos(req: Request, res: Response) {
  try {
    const todos = await service.getTodos();
    res.json(todos);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({ error: "Failed to fetch todos" });
  }
}

export async function createTodo(req: Request, res: Response) {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const todo = await service.createTodo(title);
    res.status(201).json(todo);
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({ error: "Failed to create todo" });
  }
}

export async function updateTodo(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { completed, title } = req.body;
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }
    const updated = await service.updateTodo(id, { title, completed });
    if (!updated) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(updated);
  } catch (err) {
    console.error("Error updating todo:", err);
    res.status(500).json({ error: "Failed to update todo" });
  }
}

export async function deleteTodo(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid task ID" });
    }
    await service.deleteTodo(id);
    res.sendStatus(204);
  } catch (err) {
    console.error("Error deleting todo:", err);
    res.status(500).json({ error: "Failed to delete todo" });
  }
}
