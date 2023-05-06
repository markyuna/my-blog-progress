import { NavLink } from "react-router-dom";
import React from 'react';

export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Home</NavLink></li>
        <li><NavLink to="/add" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Add Post</NavLink></li>
        <li><NavLink to="/list" className={({isActive}) => (isActive ? "activeLink" : undefined)}>Display all Posts</NavLink></li>
      </ul>
    </div>
  )
}
