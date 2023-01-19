import { useContext } from "react";


import Button from "./Buttom";
import { ThemeContext } from "utils/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="navbar sticky top-0 z-50 border-gray-200 bg-white dark:bg-black">
      <div className="flex-1">
        <a className=" btn btn-ghost normal-case text-xl text-black dark:text-white">daisyUI</a>
      </div>
      <div className="flex-none gap-2 justify-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full bg-white text-black shadow-sm  focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        </div>
        <div className="dropdown dropdown-end">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Login</a></li>
      </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
