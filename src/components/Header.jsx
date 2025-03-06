import React from "react";
import { Link} from "react-router-dom";
import "./Header.css";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header({ cartCount }) {

  return (
    <div className="container1">
      <div className="logo">
        <img src="logo.png" alt="logo" width="120px" height="60px"></img>
      </div>
      <ul>
        <li>
          <Link to="/" >
            <FaHome style={{ marginRight: "8px" }} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart style={{ marginRight: "8px" }} />
            View Cart ({cartCount})
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaUser style={{ marginRight: "8px" }} />
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}