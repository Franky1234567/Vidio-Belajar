import { createBrowserRouter } from "react-router";
import LoginPage from "../Layouts/Login-layout";
import RegisterPage from "../Layouts/Register-layout";
import HomePage from "../Pages/home";
import Pemasaran from "../Pages/Pemasaran";
import ErorPage from "../components/ErorrPage";
import RootLayout from "../Layouts/RootLayout";
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
    ],
  },
  
]);
