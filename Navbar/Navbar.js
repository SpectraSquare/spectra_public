import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ol className="nav-list">
        <li className="nav-item"><a href="#Home">Home</a></li>
        <li className="nav-item"><a href="https://github.com/avinash-25">Github</a></li>
        <li className="nav-item"><a href="https://www.linkedin.com/in/avinash-ranjan-0a58a516b">Linkedin</a></li>
        <li className="nav-item"><a href="https://leetcode.com/avinash-25/">Leetcode</a></li>
        <li className="nav-item"><a href="https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=main_header&utm_campaign=practice_header">GFG</a></li>
        <li className="nav-item"><a href="https://avinashranjanportfolio.netlify.app/">Portfolio</a></li>
      </ol>
    </nav>
  );
}

export default Navbar;
