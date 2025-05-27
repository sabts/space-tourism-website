import { Outlet, useLocation } from "react-router";
import Menu from "../components/menu/Menu";
import { StyledPageContainer } from "./layout-styles";
import { BACKGROUND } from "../styles/backgrounds";

const Layout = () => {
  const location = useLocation();
  const background = getBackgrounds(location);
  return (
    <StyledPageContainer $background={background}  >
      <Menu />
      <Outlet />
    </StyledPageContainer>
  );
};

export default Layout;

const getBackgrounds = (location) => {
  const pathname = location.pathname.slice(1);
  if(pathname === '') {return BACKGROUND.home }
  return BACKGROUND[pathname]
};
