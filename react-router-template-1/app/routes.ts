
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/index";
import { Page } from "./routes/page";

export const router = createBrowserRouter([
  {
	path: "/",
	element: <Home />,
  },
]);
