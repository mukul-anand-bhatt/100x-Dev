"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="bg-slate-400 mt-5 p-8">
        <h1 className="text-xl mb-4">Users List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.username} --- <Link href={`/${user.id}`}>Explore</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UsersPage;
