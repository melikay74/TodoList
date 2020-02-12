import React from 'react';
import { Link } from 'react-router-dom';

//functional component does not use render, just return
function Header() {
  return (
    <header>
      <h1>To Do List</h1>
      <Link to="/todolist/">Home</Link> 
      | 
      <Link to="/todolist/about">About</Link>
    </header>
  )
}

export default Header;