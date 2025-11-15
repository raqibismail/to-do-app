import { api } from "./_blocs/api";
import TaskList from "./_components/TaskList";

export default async function Page() {
  const todos = await api.getTodos(); // SERVER FETCH

  return (
    <div className=" mx-auto py-20 space-y-6">
      <h1 className="text-3xl font-bold">To-Do App</h1>
      
      <TaskList initialTodos={todos} />
    </div>
  );
}
