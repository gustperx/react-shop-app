import { FC, ReactNode } from "react";
import { Footer, Navbar } from "../ui";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-auto container mx-4 sm:mx-auto mt-16 mb-12">
        {children}
      </div>

      <Footer />
    </div>
  );
};
