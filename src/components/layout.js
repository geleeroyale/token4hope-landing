/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import CookieConsent from 'react-cookie-consent'

import CanvasTexture from '../images/creased-black-paper-texture.jpg'
import Fingers from '../images/t4h-fingers.png'
import CollectiveEnergyLogo from '../images/collective-energy-logo.png'
import AwsLogo from '../images/aws-logo.png'

import Header from './header'
import '../components/clear.css'

const Global = styled.div`
  background-color: black;
  background-image: url("${CanvasTexture}");
  background-size: cover;
  z-index: 1;
  position: relative;
  min-height: 100vh;
  text-shadow:
   -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
`

const FingersImage = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  max-height: 70vh;
  max-width: 30vw;
  z-index: 2;

  @media (max-width: 650px) {
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
  place-content: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 100vw;
  @media (max-width: 650px) {
    position: static;
    flex-flow: column wrap;
    place-content: flex-start;
  }
`
const FooterContent = styled.div`
  padding: 0.5rem;
  display: inline-grid;
  grid-template-columns: auto auto;
  align-items: center;
  @media (max-width: 650px) {
    grid-template-columns: auto;
  }

  & .footer-ce {
    @media (max-width: 650px) {
      align-self: stretch;
    }
  }

  & .footer-aws {
    @media (max-width: 650px) {
      align-self: stretch;
    }
  }
  span {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    img {
      padding: 0.5rem;
    }
    a {
      padding: 0rem 0.5rem;
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
  @media (max-width: 650px) {
    display: grid;
    justify-content: center;
  }
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
          maxWidth: 960
        }}
      >
        <FingersImage src={Fingers} />
        <Content>{children}</Content>
      </div>
      <Footer>
        <FooterContent>
          <span className='footer-ce'>
            <div>
              © {new Date().getFullYear()}, Ein Projekt von
              {` `}
            </div>
            <a href='https://www.collective-energy.at' target='blank'>
              <img
                src={CollectiveEnergyLogo}
                alt='Collective Energy'
                height='30px'
              />
            </a>
          </span>
          <span className='footer-aws'>
            <div>
              Die Umsetzung erfolgt durch Unterstützung des aws: Austria
              Wirtschaftsservice {` `}
            </div>
            <a href='https://aws.at' target='blank'>
              <AWS
                src={AwsLogo}
                alt='Austria Wirtschaftsservice'
                height='30px'
              />
            </a>
          </span>
        </FooterContent>
      </Footer>
      <CookieConsent
        location='bottom'
        buttonText='Akzeptieren'
        declineButtonText='Nicht akzeptieren'
        cookieName='gatsby-gdpr-google-analytics'
      >
        Diese Seite verwendet anonymisierte "Cookies" für Google Analytics.
      </CookieConsent>
    </Global>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
