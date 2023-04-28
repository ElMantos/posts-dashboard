import { RouteObject } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

export default routes;
