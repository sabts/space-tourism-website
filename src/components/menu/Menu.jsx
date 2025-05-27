import { Link } from "react-router";
import { MENU_CONTENT } from "../../constants/menu-content.js";
import {
  StyledImg,
  StyledImgContainer,
  StyledMenuContainer,
  StyledMenuContent,
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
        {!showMenu ? (
          <StyledImg
            src="/assets/images/shared/icon-hamburger.svg"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <StyledImg
            src="/assets/images/shared/icon-close.svg"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </StyledImgContainer>

      {showMenu && (
        <nav>
          <StyledMenuContentContainer $isOpen={showMenu}>
            {MENU_CONTENT.map(content => (
              <li key={content.id}>
                <StyledMenuContent
                  to={content.path}
                  onClick={() => setShowMenu(false)}
                >
                  {content.index} {content.name}
                </StyledMenuContent>
              </li>
            ))}
          </StyledMenuContentContainer>
        </nav>
      )}
    </StyledMenuContainer>
  );
};
export default Menu;
