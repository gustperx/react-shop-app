import { SlackIcon, TwitterIcon } from "./icons";

export const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <SlackIcon />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a>
          <TwitterIcon />
        </a>
      </div>
    </footer>
  );
};
