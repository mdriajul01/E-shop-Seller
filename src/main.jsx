import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Auth/Login.jsx";
import Registration from "./Components/Auth/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "registration",
        element:<Registration></Registration>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(

    <StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StrictMode>

);
