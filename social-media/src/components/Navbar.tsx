import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import logoNav from "../assets/logoNav.svg";
import NavSearch from "./NavSearch";
import Avatar from "./Avatar";

import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { ThemeContext } from "utils/context";
import { handleAuth } from "utils/redux/reducers/reducer";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [cookie, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme, setTheme } = useContext(ThemeContext);
  const checkToken = cookie.token;

  const handleTheme = (mode: string) => {
    setTheme(mode);
    localStorage.setItem("Theme", mode);
  };

  const handleLogout = async () => {
    removeCookie("token");
    dispatch(handleAuth(false));
    navigate("/login");
    alert("You logout");
  };

  return (
    <div className="navbar sticky bg-black flex w-full justify-between items-center h-16 px-4 z-10">
      <Link to="/" id="to-homepage">
        <img src={logoNav} alt="logo"/>
      </Link>
      <NavSearch />

      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Avatar/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li className="border-b">
            <button id="to-profile" onClick={() => navigate("/profile")}>
              profile
            </button>
          </li>
          <li className="border-b">
            <button
              id="btn-mode"
              onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
            >
               {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          </li>
          <li className="border-b">
            <button
              id="btn-logout"
              onClick={() => (checkToken ? handleLogout() : navigate("/login"))}
            >
              {checkToken ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
