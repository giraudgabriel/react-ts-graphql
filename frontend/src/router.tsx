import { HashRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

export const RouterComponent = () => (
  <HashRouter>
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </HashRouter>
);
