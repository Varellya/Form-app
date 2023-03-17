import React from "react";
import { Users } from "./components/Users";

export default function App() {
  return (
    <div className='table'>
      <div className='table_head'>
        <h1 id="headName">First Name</h1>
        <h1>Last Name</h1>
        <h1 id="headEmail">Email</h1>
        <h1 id="headAge">Age</h1>
        <h1 id="headGender">Gender</h1>
        <h1 id="headBlood">Blood group</h1>
      </div>

      <ul className='table_body'>
        <Users />
      </ul>
    </div>
  );
};
