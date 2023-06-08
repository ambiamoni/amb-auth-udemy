"use client"
import React, { useEffect, useState } from 'react'
import UserCard from '../../components/UserCard'


function Profile() {
    const[users,setUsers]=useState([])
    const getData=async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      
    }
    useEffect(() => {
        getData();
    },[])
  return (
      <div>
          <h1>Profile Page</h1>
          <hr />
          <div className='flex flex-col gap-5'>
              {users.map((user: any) => (
                  <UserCard
                      key={user.id}
                      user={user}
                  />
              ))
               }
           </div>
      </div>
  )
}

export default Profile