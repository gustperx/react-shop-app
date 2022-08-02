import { Link } from "react-router-dom";
import { BarIcon } from "./icons";

const menuLinksAdmin = [
  {
    name: "Admin",
    to: "/admin",
  },
  {
    name: "Categories",
    to: "/categories",
  },
  {
    name: "Products",
    to: "/products",
  },
  {
    name: "Search",
    to: "/search",
  },
];

const menuLinksShop = [
  {
    name: "Categories",
    to: "/categories",
  },
  {
    name: "Products",
    to: "/products",
  },
  {
    name: "Search",
    to: "/search",
  },
];

export const NavbarShop = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl" to={"/"}>Shop App</Link>
      </div>
      <div className="hidden md:block">
        <ul className="menu menu-horizontal p-0">
          {menuLinksShop.map((item) => (
            <li key={item.name}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
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
            {menuLinksAdmin.map((item) => (
              <li key={item.name}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
