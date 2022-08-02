import { FC, ReactNode } from "react";
import { FooterShop, NavbarShop } from "../ui";

interface Props {
  children: ReactNode;
}

export const ShopLayout: FC<Props> = ({ children }) => {
  return (
    <div data-theme="winter">
      <div className="flex flex-col min-h-screen">
        <NavbarShop />

        <div className="flex-auto container sm:mx-auto mt-16 mb-12">
          {children}
        </div>

        <FooterShop />
      </div>
    </div>
  );
};
