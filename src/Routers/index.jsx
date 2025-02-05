import { createBrowserRouter } from "react-router";
import LoginPage from "../Layouts/Login-layout";
import RegisterPage from "../Layouts/Register-layout";
import HomePage from "../Pages/home";
import Pemasaran from "../Pages/Pemasaran";
import ErorPage from "../components/ErorrPage";
import RootLayout from "../Layouts/RootLayout";
import Detail from "../Pages/detail";
import Profile from "../Pages/Profile";
import BayarMetode from "../Pages/MetodePembayaran";
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element:<LoginPage/>,
//     },
//     {
//         path: "/register",
//         element: <RegisterPage/>
//     },
//     {
//         path: "/home",
//         element: <HomePage/>,
//     },
//     {
//         path: "/pemasaran",
//         element: <Pemasaran/>,
//     },
//     {
//         path: "*",
//         errorElement: <ErorPage/>
//     },

// ])

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErorPage />,
    children: [
    {
        path: "/",
        element: <LoginPage/>
    },
    { path: "/register", 
        element: <RegisterPage /> 
    },
    { path: "/home", 
        element: <HomePage /> 
    },
    { path: "/pemasaran", 
        element: <Pemasaran /> 
    },
    {
      path: "/detail/:id",
      element: <Detail/>
    },
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path: "/metodepembayaran",
      element: <BayarMetode/>
    },
    ],
  },
  
]);
