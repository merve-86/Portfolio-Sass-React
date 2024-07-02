import React from 'react'
import './Footer.scss'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="horizontal">
        <div className="social-icons">
          <Link to="#">
            <i className="fab fa-twitter fa-2x" />
          </Link>
          <Link to="#">
            <i className="fab fa-facebook fa-2x" />
          </Link>
          <Link to="#">
            <i className="fab fa-instagram fa-2x" />
          </Link>
          <Link to="#">
            <i className="fab fa-github fa-2x" />
          </Link>
        </div>
        <div className="copyright">© Copyright 2024</div>
      </footer>
    </div>
  );
}

export default Footer
