/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" className="input-text"  placeholder="Search..."/>
            </div>
            <div className="shrink w-80 sm:order-2">
                <NavLink href={"/"}>
                    <a className="font-bold uppercase text-3xl">Design</a>
                </NavLink>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <NavLink href={"/"}><a><ImFacebook color="#888888" /></a></NavLink>
                    <NavLink href={"/"}><a><ImTwitter color="#888888" /></a></NavLink>
                    <NavLink href={"/"}><a><ImYoutube color="#888888" /></a></NavLink>
                </div>
            </div>
        </div>
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activelink" : undefined)}
            >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "activelink" : undefined)}
            >
            Add Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "activelink" : undefined)}
          >
            All Posts
          </NavLink>
        </li>
      </ul>
    </div>
            </header>
  );
}
