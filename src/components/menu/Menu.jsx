import { Link } from "react-router";
import { MENU_CONTENT } from "../../constants/menu-content.js";
import {
  StyledImg,
  StyledImgContainer,
  StyledIndex,
  StyledMenuContainer,
  StyledMenuContent,
  StyledMenuContentContainer,
  StyledMenuElement,
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

      <nav>
        <StyledMenuContentContainer $isOpen={showMenu}>
          {MENU_CONTENT.map(content => (
            <li key={content.id}>
              <StyledMenuContent
                to={content.path}
                onClick={() => setShowMenu(false)}
              >
                <StyledMenuElement>
                  <StyledIndex>{content.index}</StyledIndex>
                  <span>{content.name}</span>
                </StyledMenuElement>
              </StyledMenuContent>
            </li>
          ))}
        </StyledMenuContentContainer>
      </nav>
    </StyledMenuContainer>
  );
};
export default Menu;
