// src/layout.js
import React from 'react';

const Layout = ({ children }) => (
  <div>
    <header>
      <h1>Weather Guesser</h1>
    </header>
    <main>{children}</main>
    <footer>
      Made with Next.js
    </footer>
  </div>
);

export default Layout;
