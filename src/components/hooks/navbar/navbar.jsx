import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () =>{
  return (
     <nav className="navbar navbar-expand-lg navbar-inverse bg-dark">
         <a href="#" className="navbar-brand">Courses Land</a>
         <button className="navbar-toggler" data-toggle="collapse" data-target="#courses" aria-controls="courses" aria-expanded="false" aria-label="Toggle Navigation">
             <span className="navbar-toggler-icon">

             </span>
         </button>
         <div className="collapse navbar-collapse" id="courses">
             <ul className="navbar nav">
                 <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                 <li className="nav-item"><NavLink to="/login" className="nav-link">Login</NavLink></li>
                 <li className="nav-item"><NavLink to="/register" className="nav-link">Register</NavLink></li>
                 <li className="nav-item"><NavLink to="/dashboard" className="nav-link">Dashboard</NavLink></li>
             </ul>

         </div>
     </nav>
  )
}


export default Navbar;