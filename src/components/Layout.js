import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Link href="/" legacyBehavior>
          <a className="nav-item" title="Home">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/guess" legacyBehavior>
          <a className="nav-item" title="Guess">
            <i className="fas fa-thermometer-half"></i>
            <span>Guess</span>
          </a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="nav-item" title="About">
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </a>
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
