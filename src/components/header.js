import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { isMobile } from "react-device-detect"

import HeaderT4HLogo from "../images/header-t4h-logo.svg"

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 80px 80px 150px 1fr auto;
  grid-gap: 1.5rem;
  justify-items: start;
  align-items: center;

  img {
    padding: 1.5rem;
    vertical-align: middle;
  }

  @media (max-width: 650px) {
    grid-template-columns: 80px 65px auto;
    grid-gap: 0rem;
    img {
      padding: 0.5rem;
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
const SiteTitleStyled = styled(Link)`
  color: #cacbcd;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 1rem;
  vertical-align: middle;
  @media (max-width: 650px) {
    font-size: 1rem;
    margin-left: 0px;
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <span>
      <HeaderContainer>
        <Link to="/">
          {isMobile ? (
            <img src={HeaderT4HLogo} alt="Token4Hope Logo" width="40px" />
          ) : (
            <img
              src={HeaderT4HLogo}
              alt="Token4Hope Logo"
              width="80px"
              height="65px"
            />
          )}
          {/**isMobile ? (
          <img src={HilfswerkLogo} alt="Hilfswerk Logo" width="30px" />
        ) : (
          <img
            src={HilfswerkLogo}
            alt="Hilfswerk Logo"
            width="65px"
            height="65px"
          />
        )**/}
        </Link>
        <h1 style={{ margin: 0 }}>
          <SiteTitleStyled
            to="/"
            style={{
              color: `#CACBCD`,
              fontWeight: `700`,
              textDecoration: `none`,
              textTransform: `uppercase`,
              marginLeft: `1rem`,
            }}
          >
            {siteTitle}
          </SiteTitleStyled>
        </h1>
        {isMobile !== "Kontakt" ? null : (
          <LinkStyled to="/kontakt">Kontakt</LinkStyled>
        )}
      </HeaderContainer>
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
