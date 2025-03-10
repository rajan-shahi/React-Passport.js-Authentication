import React from "react";

export default function Navbar() {
  return (
    <div className=" navbar">
      <span className="logo">Rajan App</span>
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
    </div>
  );
}
