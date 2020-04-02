import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/AuthActions";
import { useDispatch } from "react-redux";

export default function SignedInLinks() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={handleSignOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          CA
        </NavLink>
      </li>
    </ul>
  );
}
