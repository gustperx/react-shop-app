import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRouter, AuthenticatedRouter } from "./index";
import { MainRouterAdmin } from "./MainRouterAdmin";
import { MainRouterAuth } from "./MainRouterAuth";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route element={<AuthenticatedRouter redirectPath="/admin" />}>
          <Route path="/*" element={<MainRouterAuth />}></Route>
        </Route>

        {/* Admin routes */}
        <Route element={<ProtectedRouter />}>
          <Route path="/admin/*" element={<MainRouterAdmin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
