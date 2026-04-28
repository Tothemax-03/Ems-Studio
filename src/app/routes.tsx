import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { UnitDetailPage } from "./pages/UnitDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/unit/:unitId",
    Component: UnitDetailPage,
  },
  {
    path: "*",
    Component: Home,
  },
]);
