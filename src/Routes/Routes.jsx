import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"}></Navigate>,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
