
import TodoList from "@/app/componets/TodoList";

export default function Home({params}) {
  return (
    <div><TodoList user={params.user} /></div>
  );
}
