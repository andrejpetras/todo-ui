import type { Todo } from "$lib/todo";
import type { PageLoad } from "./$types";



/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(`/api/todo`);
  const todos = await res.json() as Todo[];
  return { todos: todos };
}