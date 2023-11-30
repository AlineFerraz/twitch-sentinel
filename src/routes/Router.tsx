import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import App from "../App";
import Streamers from "../pages/Streamers";
import StreamerProfile from "../pages/Profile";


export default function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",
          element: <HomePage />
        },
        {
          path: "streamers",
          element: <Streamers />
        },
        {
          path: "streamers/profile/:id",
          element: <StreamerProfile />
        }
      ],
      errorElement: <ErrorPage />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
