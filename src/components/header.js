import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { BrowserView, MobileView } from "react-device-detect"

import HeaderT4HLogo from "../images/header-t4h-logo.svg"
import HilfswerkLogo from "../images/header-hilfswerk-logo.svg"

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 150px 1fr auto;
  grid-gap: 1.5rem;
  justify-items: start;
  align-items: center;

  img {
    padding: 1.5rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 40px 40px auto;
    grid-gap: 0.5rem;
    img {
      padding: 0.1rem;
    }
  }
`

const LinkStyled = styled(Link)`
  color: #fbc707;
  text-decoration: none;
  font-size: 2rem;
  justify-content: right;
  grid-column: 5;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <span>
      <BrowserView>
        <HeaderContainer>
          <img
            src={HeaderT4HLogo}
            alt="Token4Hope Logo"
            width="80px"
            height="65px"
          />
          <img
            src={HilfswerkLogo}
            alt="Hilfswerk Logo"
            width="65px"
            height="65px"
          />
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `#CACBCD`,
                fontWeight: `700`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                marginLeft: `2rem`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <LinkStyled to="/kontakt">Kontakt</LinkStyled>
        </HeaderContainer>
      </BrowserView>
      <MobileView>
        <HeaderContainer>
          <img src={HeaderT4HLogo} alt="Token4Hope Logo" height="30px" />
          <img src={HilfswerkLogo} alt="Hilfswerk Logo" height="30px" />
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `#CACBCD`,
                fontWeight: `700`,
                textDecoration: `none`,
                textTransform: `uppercase`,
                marginLeft: `0.5rem`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </HeaderContainer>
      </MobileView>
    </span>
    <hr />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
