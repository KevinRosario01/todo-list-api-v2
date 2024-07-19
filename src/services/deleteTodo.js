export async function deleteTodo(todoId) {
await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`,
    {
      method: "DELETE",
    });
  }