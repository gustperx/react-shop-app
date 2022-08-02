import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, YouTubeIcon } from "./icons";

const menuLinksFooterShop = [
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

export const FooterShop = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        {menuLinksFooterShop.map((item) => (
          <Link className="link link-hover" key={item.name} to={item.to}>{item.name}</Link>
        ))}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <TwitterIcon />
          </a>
          <a>
            <YouTubeIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Shop App Ltd</p>
      </div>
    </footer>
  );
};
