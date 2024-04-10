import React, { useState } from 'react';
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../slices/users";

function NavBar() {
  let [ userName, setUserName ] = useState("John");

  let dispatch = useDispatch();

  let users = useSelector(state => state.users);

  let onLoginClick = () => {
    dispatch( login(userName) );
  };

  let onLogoutClick = () => {
    dispatch( logout() );
  };

  return (
    <div className="nav">

      {!users.isLoggedIn? <div>
        <input type="text" placeholder="Username" value={userName} onChange={(event) => { setUserName(event.target.value); }} className="form-control" />

      <button className="button button-blue" onClick={onLoginClick}>Login</button>
      </div>: 
      
      
      <div>
        <i className="fas fa-user"></i>&nbsp;
        <span>{users.currentUser}</span>
        <button className="button button-red" onClick={onLogoutClick}>Logout</button>
      </div>}

      
    </div>
  )
}

export default NavBar;
