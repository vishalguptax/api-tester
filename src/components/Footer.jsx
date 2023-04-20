import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full text-center py-2">
      © {new Date().getFullYear()} All Rights Reserved | Made by{" "}
      <a
        href="https://www.linkedin.com/in/vishalgupta26/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-200"
      >
        Vishal Gupta
      </a>
    </footer>
  );
}

export default Footer