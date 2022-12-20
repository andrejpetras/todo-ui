<script lang="ts">
  import type { Todo } from "$lib/todo";
  export let data: { todos: Todo[] };
</script>

<div class="container mx-auto  ">
    <div class="flex flex-col mx-auto divide-y">
        <div><h1 class="text-2xl">Todos</h1></div>
        <div>
            <ul>
                {#each data.todos as todo}
                    <li>
                        <input type="checkbox" checked={todo.complete} />
                        {todo.id} - {todo.text}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    
</div>


