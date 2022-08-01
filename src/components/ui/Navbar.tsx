import { Link } from "react-router-dom";
import { BarIcon, LogoutIcon } from "./icons";
import { signOutFirebase } from "../../firebase/auth";

const menuLinks = [
  {
    name: "Portfolios",
    to: "/admin/portfolios",
  },
  {
    name: "Languages",
    to: "/admin/languages",
  },
];

export const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <BarIcon />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
            data-theme="autumn"
          >
            {menuLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={() => signOutFirebase()}
          className="btn btn-ghost btn-circle"
        >
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};
