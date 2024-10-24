import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
// import GlobalLayout from "../layouts/global";

// type CustomRouteObject = {
//   label?: string;
//   show?: boolean;
// } & RouteObject;

// export const ROUTES: CustomRouteObject[] = [
//   {
//     path: "/",
//     element: <Home />,
//     label: "홈",
//     show: true,
//   },
// ];

const router = createBrowserRouter([
  // { path: "/", element: <GlobalLayout />, children: ROUTES },
  {
    path: "/",
    element: <Home />,

  },
]);

export default router;
