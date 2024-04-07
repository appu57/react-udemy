//create every component as class , and extend component which specifies every sub component is a part of parent class

import React  from "react";
import {Link, NavLink}  from 'react-router-dom'

// export default class NavBar extends Component{  
//   render(){
//       return <h2>Helllo</h2>
//   }
// }

const Home = function(){
  return (
    <div className="App">
    <nav className="navbar navbar-inverse">
      <a href="#" className="navbar-brand">Course Land</a>
      <button className="navbar-toggle" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false"
      aria-controls="navbarSupportedContent">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav nav">
          <li className="nav-item">
            <NavLink to="/home"  className="nav-link">Home</NavLink> {/* routing */}
          </li>
           <li className="nav-item">
             Courses
           </li>
           <li className="nav-item">
             Courses Cart
           </li>
          <li className="nav-item">
            Courses Completed
          </li>
          <li className="nav-item">
            Login
          </li>
          <li className="nav-item">
            Logout
          </li>
        </ul>
      </div>
    </nav>
 </div>

  );
};

export default Home;