// MenuBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
