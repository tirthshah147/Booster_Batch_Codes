import React from 'react'
import { useState,useEffect } from 'react'

export default function UserHook() {
  const [users,setUsers] = useState(null);
  const [error,setError] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((users) => {
          setIsLoading(false);
          setUsers(users);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        })
  });
  
  if (error) return <div>Error while fetching...</div>
  if (!users) return isLoading ? <div>Loading....</div> : <div>No Users</div>;
  return (
    <ul>
      {users.map((user) => {
         return <li key={user.id}>{user.id} {user.name}</li>
      })}
    </ul>
  )
}
