import { Outlet,useLocation } from "react-router";
import Logo from "../components/Logo";

const RootLayout = () => {
  const location = useLocation();
  const showlogo = location.pathname!== "/" && location.pathname !== "/register";
    return (
      <>
      {showlogo &&(

        <Logo textMenu="ketagory" avatar="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"/>
      )}
        <Outlet />
      </>
    );
  };

  export default RootLayout;
  
