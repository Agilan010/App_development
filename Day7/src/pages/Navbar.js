import React from 'react';
import '../assets/css/Navbar.css';
import { NavLink } from 'react-router-dom';
export const Bar = () => {
    return (
        <nav className="navbar">
            <div className="l">expressCart</div>
            <ul className="nav-links">
                
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li> 
          <NavLink to="/cart">Cart</NavLink>
          
        </li>
            </ul>
        </nav>
    );
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// export const Bar = () => {
//   return (
//     <nav>
//       <ul class="menu-bar">
//         <li> <Link to="/Home"> Home </Link></li>
//         <li> <Link to="/Dashboard"> Dashboard </Link></li>
//         <li> <Link to="/shop"> Shop </Link></li>
//       </ul>
//     </nav>
//   );
// }


