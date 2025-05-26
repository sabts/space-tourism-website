import { Link, NavLink } from "react-router";
import { MENU_CONTENT } from "../../constants/menu-content";
import {
  StyledImg,
  StyledImgContainer,
  StyledMenuContainer,
  StyledMenuContentContainer,
} from "./menu-styles";
import { useState } from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StyledMenuContainer>
      <StyledImgContainer>
        <Link to={"/"}>
          <img src="/assets/images/shared/logo.svg" />
        </Link>
        <StyledImg
          src="/assets/images/shared/icon-hamburger.svg"
          onClick={() => setShowMenu(!showMenu)}
          $isOpen={showMenu}
        />
      </StyledImgContainer>

      {showMenu && (
        <nav>
          <StyledMenuContentContainer>
            {MENU_CONTENT.map(content => (
              <li key={content.id}>
                <NavLink to={content.path} onClick={() => setShowMenu(false)}>
                  {content.index} {content.name}
                </NavLink>
              </li>
            ))}
          </StyledMenuContentContainer>
        </nav>
      )}
    </StyledMenuContainer>
  );
};
export default Menu;
