import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/usestate">useState()</NavLink>
          </li>
          <li>
            <NavLink to="/usereducer">useReducer()</NavLink>
          </li>
          <li>
            <NavLink to="/useeffect">useEffect()</NavLink>
          </li>
          <li>
            <NavLink to="/useref">useRef()</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar