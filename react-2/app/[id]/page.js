"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const UserPage = ({ params }) => {
  const { id } = params;

  const [user, setUser] = useState("");

  const getUser = async () => {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`); // Fixed URL
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]); // Added 'id' as a dependency

  return (
    <div>
      <h1>User Details</h1>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <Link href="/">Go Back</Link>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
};

export default UserPage;
