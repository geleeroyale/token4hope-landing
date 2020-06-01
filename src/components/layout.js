/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import CanvasTexture from "../images/creased-black-paper-texture.jpg"
import Fingers from "../images/t4h-fingers.png"
import CollectiveEnergyLogo from "../images/collective-energy-logo.png"
import AwsLogo from "../images/aws-logo.png"

import Header from "./header"

const Global = styled.div`
  background-color: black;
  background-image: url("${CanvasTexture}");
  background-size: cover;
  z-index: 1;
  position: relative;
  min-height: 100vh;
`

const FingersImage = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  max-height: 70vh;
  max-width: 30vw;
  z-index: 2;

  @media (max-width: 500px) {
    display: none;
  }
`

const Footer = styled.footer`
  min-height: 10vh;
  text-align: center;
  color: #fbc707;
  background-color: #000000aa;
  position: relative;
  z-index: 3;
  @media (max-width: 500px) {
  }
`
const FooterContent = styled.div`
  padding: 0.5rem;
  display: inline-grid;
  align-items: center;

  span {
    padding: 0.5rem;
    img {
      padding: 0.5rem;
    }
    a {
      vertical-align: middle;
    }
  }
`

const AWS = styled.img`
  background-color: white;
  border-radius: 50px;
`

const Content = styled.main`
  position: relative;
  z-index: 100;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Global>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
        }}
      >
        <FingersImage src={Fingers} />
        <Content>{children}</Content>
      </div>
      <Footer>
        <FooterContent>
          <span>
            © {new Date().getFullYear()}, Ein Projekt von
            {` `}
            <a href="https://www.collective-energy.at" target="blank">
              <img
                src={CollectiveEnergyLogo}
                alt="Collective Energy"
                height="30px"
              />
            </a>
            - Die Umsetzung erfolgt in Zusammenarbeit mit dem aws: Austria
            Wirtschaftsservice{` `}
            <a href="https://aws.at" target="blank">
              <AWS
                src={AwsLogo}
                alt="Austria Wirtschaftsservice"
                height="30px"
              />
            </a>
          </span>
        </FooterContent>
      </Footer>
    </Global>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
