import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return <div className="Header">{props.children}</div>;
}

export default Header;
