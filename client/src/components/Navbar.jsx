import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
  return (
    <div className=" navbar">
      <span className="logo">
        <Link className="link" to="/">
          Rajan Shop
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              className="avatar"
              src="https://imgs.search.brave.com/BlbU0NPeMKpiZoCLRLFDGtncEm_pJ9YtTPe-Xl0R6io/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8wNy8wNy80OS93/ZWItMjkyNTkyOV82/NDAuanBn"
              alt=""
            />
          </li>
          <li className="listItem">Rajan Bahadur Shahi</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}
