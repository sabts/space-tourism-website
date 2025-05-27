import { Outlet, useLocation } from "react-router";
import Menu from "../components/menu/Menu";

const Layout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
};

export default Layout;
