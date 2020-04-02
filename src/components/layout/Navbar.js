import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";

export default function Navbar() {
  const auth = useSelector(state => state.firebase.auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          ProjectPlanner
        </Link>
        {links}
      </div>
    </nav>
  );
}
