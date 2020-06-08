
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.scss';


const Nav = (props) => {
  return (
    <nav className="navbar">
      <ul className="navList">
        {/* <a href="http://localhost:8080/"><span className="otherPage">Different Page</span></a> */}
        <li className="home"><NavLink to="/" exact><text style={{ color: 'white' }}>Home</text></NavLink></li>
        <div className="navButtonBox">
          {/* <li className="navButton"><NavLink to="/" exact>Home</NavLink></li> */}
          <li className="navButton"><NavLink to="/about"><text style={{ color: 'white' }}>About</text></NavLink></li>
          <li className="navButton"><NavLink to="/micro"><text style={{ color: 'white' }}>Micro</text></NavLink></li>
          <li className="navButton"><NavLink to="/macro"><text style={{ color: 'white' }}>Macro</text></NavLink></li>
          {/* <li className="navButton"><NavLink to="/references"><text style={{ color: 'white' }}>References</text></NavLink></li> */}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
