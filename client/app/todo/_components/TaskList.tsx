"use client";

import React, { useState } from "react";
import { Trash } from "lucide-react";
import { api, dateFormatter } from "../_blocs/api";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input } from "@heroui/input";

export default function TaskList({ initialTodos }: { initialTodos: any[] }) {
  const [todos, setTodos] = useState(initialTodos);
  const [input, setInput] = useState("");

  const addTask = async () => {
    if (!input.trim()) return;

    const response = await api.addTask(input);
    setTodos((prev) => [...prev, response]);
    setInput("");

    addToast({
      color: "success",
      title: "Success",
      description: "Added a new todo",
    });
  };

  const deleteTask = async (id: number) => {
    await api.deleteTask(id);
    setTodos(todos.filter((t) => t.id !== id));
    addToast({
      color: "danger",
      title: "Deleted",
      description: "Task has been deleted",
    });
  };

  const toggleComplete = async (id: number) => {
    const task = todos.find((t) => t.id === id);
    if (!task) return;

    const updated = {
      ...task,
      completed: !task.completed,
    };
    await api.updateTask(updated);
    addToast({
      color: "success",
      title: "Updated",
      description: "Task has been updated",
    });
    setTodos(todos.map((t) => (t.id === id ? updated : t)));
  };

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <Input
          type="text"
          variant="faded"
          placeholder="New todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="faded" onPress={addTask}>
          Add
        </Button>
      </div>
      <div className="flex flex-col gap-4 mt-4 ">
        {todos.map((todo) => (
          <Card key={todo.id} className="flex flex-row justify-between p-4">
            <div className="text-start">
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <p className="text-sm text-foreground">
                Created: {dateFormatter(todo.createdAt)}
              </p>
              <p
                className={`mt-2 font-bold ${todo.completed ? "text-green-600" : "text-red-600"}`}
              >
                Status: {todo.completed ? "Completed" : "Not Completed"}
              </p>
            </div>

            <div className="flex flex-col justify-between items-center gap-2 w-1/6">
              {todo.completed ? (
                <Button
                  variant="ghost"
                  onPress={() => toggleComplete(todo.id)}
                  color="warning"
                  className="w-full"
                >
                  Undo
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  onPress={() => toggleComplete(todo.id)}
                  color="success"
                  className="w-full"
                >
                  Complete
                </Button>
              )}

              <Button
                variant="ghost"
                onPress={() => deleteTask(todo.id)}
                color="danger"
                className="w-full"
              >
                <Trash className="cursor-pointer" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
