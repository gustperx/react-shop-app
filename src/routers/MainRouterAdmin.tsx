import { Route, Routes } from "react-router-dom";
import { PortfolioPage } from "../pages/portfolio";
import { LanguagePage } from "../pages/language";
import { MainLayout } from "../components/layouts";
import { Error404 } from "../components";
import { DashboardPage } from "../pages/DashboardPage";

export const MainRouterAdmin = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        {/* Portfolio */}
        <Route path="/portfolios" element={<PortfolioPage />} />
        {/* Language */}
        <Route path="/languages" element={<LanguagePage />} />

        {/* Error */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </MainLayout>
  );
};
