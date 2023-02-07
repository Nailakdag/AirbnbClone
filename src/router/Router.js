import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HostHomes from "../pages/HostHomes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/host/homes",
    element: <HostHomes />,
  },
]);

export default router;
