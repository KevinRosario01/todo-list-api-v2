export async function getUsers() {
    const response = await fetch("https://playground.4geeks.com/todo/users/");
    if (response.status === 200) {
        const data = await response.json();
        return data.users;
    }
    return [];
}