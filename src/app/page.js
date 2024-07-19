"use client";

import { getUsers } from "@/services/getUsers";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    console.log('Fetched users:', data);
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
  <div className="flex flex-col">
      List of users {users.length}
      {users.map((user) => (
        <Link
          href={`/${user.name}`}
          key={user.id}
          className="text-sm text-sky-400 hover:underline"
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
}
