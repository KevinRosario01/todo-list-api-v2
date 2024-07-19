export async function getTodos(user) {
    const response = await fetch(`https://playground.4geeks.com/todo/users/${user}`)
    if (response.status === 200) {
        const data = await response.json();
        return data.todos;
    }
    return [];
}