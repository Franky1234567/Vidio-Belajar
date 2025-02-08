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
import BayarPage from "../Pages/Bayar";
import Berhasil from "../Pages/Berhasil";
import Pesananpage from "../Pages/PesananPage";
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
      path: "/Pesanan-saya",
      element: <Pesananpage/>
    },
    {
      path: "/metodepembayaran",
      element: <BayarMetode/>
    },
    {
      path: "/Bayar",
      element: <BayarPage/>
    },
    {
      path: "/berhasil",
      element: <Berhasil/>
    },
    ],
  },
  
]);
