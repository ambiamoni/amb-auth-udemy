"use client";
import React from "react";

function UserCard({ user }: any) {
  return (
    <div
      key={user.id}
      onClick={() => {
        alert("The user name is " + user.name);
      }}
    >
      <h1>{user.name}</h1>
      <span>
        {user.address.city},{user.address.street}
      </span>
    </div>
  );
}

export default UserCard;
