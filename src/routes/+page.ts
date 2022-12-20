import type { Todo } from "src/lib/todo";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`/api/todo`);
  const todos = await res.json() as ArrayLike<Todo>;
  return { todos };
}