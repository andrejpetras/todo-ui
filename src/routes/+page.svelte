<script lang="ts">
	import type { Todo } from "src/lib/todo";


      /** @type {import('./$types').PageData} */
  export let todos: ArrayLike<Todo>;
</script>

<div class="container mx-auto  ">
    <div class="flex flex-col mx-auto divide-y">
        <div><h1 class="text-2xl">Todos</h1></div>
        <div>
            <ul>
                {#each todos as todo}
                    <li>{todo.text}</li>
                {/each}
            </ul>
        </div>
    </div>
    
</div>


