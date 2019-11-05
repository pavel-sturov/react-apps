import React from "react";
import './header.css';

const Header = () => {
  return(
    <div className="navigator">
        <nav>
            <ul>
              <li className="nav-link"><a href="/">Home</a></li>
              <li className="nav-link"><a href="/characters">List of Characters</a></li>
              <li className="nav-link"><a href="/character/:characterId">Full Info</a></li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;