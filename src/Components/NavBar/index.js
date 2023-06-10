import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../../styles/Navbar.style";
import LogoImg from "../../assets/images/photo.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
      <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/Home"> Home</NavbarLink>
              <NavbarLink to="/userLogin"> Sign In</NavbarLink>
              <NavbarLink to="/userRegis"> Register</NavbarLink>
              <NavbarLink to="/Inquiry"> Inquiry</NavbarLink>
              <OpenLinksButton
                  onClick={() => {
                    setExtendNavbar((curr) => !curr);
                  }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <Logo src={LogoImg}></Logo>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
            <NavbarExtendedContainer>
              <NavbarLinkExtended to="/Home"> Home</NavbarLinkExtended>
              <NavbarLinkExtended to="/userLogin"> Sign In</NavbarLinkExtended>
              <NavbarLinkExtended to="/userRegis"> Sign Up</NavbarLinkExtended>
              <NavbarLinkExtended to="/Inquiry"> Inquiry</NavbarLinkExtended>
            </NavbarExtendedContainer>
        )}
      </NavbarContainer>
  );
}

export default Navbar;
