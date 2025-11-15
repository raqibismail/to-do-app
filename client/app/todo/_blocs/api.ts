export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export const api = {
  getTodos: async () => {
    return fetch("http://localhost:4000/api/todos").then((r) => r.json());
  },
  addTask: async (title: string) => {
    return fetch("http://localhost:4000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    }).then((r) => r.json());
  },
  updateTask: async (data: any) => {
    return fetch(`http://localhost:4000/api/todos/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => r.json());
  },
  deleteTask: async (id: number) => {
    return fetch(`http://localhost:4000/api/todos/${id}`, {
      method: "DELETE",
    });
  },
};

import dayjs from "dayjs";
export function dateFormatter(date: any) {
  return dayjs(date).format("DD/MM/YYYY H:m");
}
