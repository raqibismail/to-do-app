import { response } from "express";
import prisma from "../../prisma";

export function getTodos() {
  return prisma.todo.findMany({ orderBy: { id: "asc" } });
}

export function createTodo(title: string) {
  return prisma.todo.create({
    data: { title },
  });
}

export function updateTodo(id: number, data: any) {
  return prisma.todo.update({
    where: { id },
    data,
  });
}

export function deleteTodo(id: number) {
  return prisma.todo.delete({
    where: { id },
  });
}
