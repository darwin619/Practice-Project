import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Nasa from '../../Assets/nasa.png';

const Header = ({currentRoute}) => {
  console.log(currentRoute)
  return (
    <div className="header">
      <Link className="header__logo-container" to="/">
        <img src={Nasa} alt="logonasa" className="header__logo"/>
      </Link>
      <div className={`${currentRoute === '/signin' ? 'header__change' : null} header__options`}>
        <Link className="header__myimages" to="/mylist">My List</Link>
        <Link className="header__signin" to='/signin' >Sign In</Link>
        <Link className="header__signout" to='/unassigned' >Sign out</Link>
      </div>
    </div>
  );
};

export default Header;