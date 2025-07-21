import { Todo } from "@/types/todo";

const API_BASE_URL = "/api";

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_BASE_URL}/todos`);

  if (!response.ok) {
    console.error("Failed response:", response.statusText);
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  console.log(data);
  return data.todos;
}