import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ProtectedRouter, AuthenticatedRouter, MainRouterAdmin, MainRouterAuth, MainRouterPublic } from "./";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Shop */}
        <Route path="/*" element={<MainRouterPublic />}></Route>

        {/* Auth routes */}
        <Route element={<AuthenticatedRouter redirectPath="/admin" />}>
          <Route path="/auth/*" element={<MainRouterAuth />}></Route>
        </Route>

        {/* Admin routes */}
        <Route element={<ProtectedRouter redirectPath="/auth" />}>
          <Route path="/admin/*" element={<MainRouterAdmin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
