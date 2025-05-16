import { createBrowserRouter, Link } from "react-router-dom";
import PerfumeList from "../pages/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PerfumeList/>
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
