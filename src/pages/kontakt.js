import React from "react"
import styled from "@emotion/styled"
import { isMobile } from "react-device-detect"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MailImage from "../images/mail.png"
import HilfswerkLogo from "../images/header-hilfswerk-logo.svg"
import DecentLogo from "../images/decent-logo.png"
import HumanventureLogo from "../images/humanventure-logo.png"

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  grid-gap: 1rem;
  align-content: center;
  place-items: center;
  min-height: 80vh;
  position: relative;
  margin: 0 auto;
  color: #fbc707;
  @media (max-width: 650px) {
    position: static;
    max-width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 0.2rem;
  }
`

const Headline = styled.h2`
  grid-row: 1;
  grid-column: 1;
  font-size: 3rem;
  font-weight: 300;
  padding-bottom: 2rem;
  @media (max-width: 650px) {
    grid-column: 1;
    font-size: 2rem;
    justify-self: start;
  }
`

const BodyText = styled.p`
  grid-row: 2;
  grid-column: 2;
  font-weight: 100;
  font-size: 1.4rem;
  padding-bottom: 2rem;
  @media (max-width: 650px) {
    grid-column: 1;
    font-size: 1.1rem;
    white-space: normal;
    width: 90%;
    margin: 0 auto;
  }
`

const MailSpan = styled.span`
  grid-row: 3;
  grid-column: 2;
  @media (max-width: 650px) {
    grid-column: 1;
  }
`

const LinkStyled = styled.a`
  color: #fbc707;
  text-decoration: none;
  font-size: 2rem;
  justify-content: right;
  padding: 1rem;
  vertical-align: top;
  @media (max-width: 650px) {
    font-size: 1rem;
    padding: 0.2rem;
    justify-self: start;
  }
`

const Partners = styled.h3`
  grid-row: 4;
  grid-column: 1;
  font-size: 3rem;
  font-weight: 300;
  padding-bottom: 2rem;
  @media (max-width: 650px) {
    grid-column: 1;
    font-size: 2rem;
    justify-self: start;
  }
`

const PartnerContainer = styled.div`
  grid-row: 5;
  grid-column: 2;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, auto);
  @media (max-width: 650px) {
    grid-column: 1;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    justify-items: center;
    padding-bottom: 3rem;
    img {
      max-width: 300px;
    }
  }
`

const Kontakt = props => (
  <Layout>
    <SEO title="Kontakt" />
    <Container>
      <Headline>Kontakt</Headline>
      <BodyText>
        Haben Sie Interesse Ihre CSR Aktivitäten zu erweitern,
        <br /> oder sind im Charity Bereich tätig?
        <br />
        Dann freuen wir uns auf Ihre persönliche Anfrage!
      </BodyText>
      <MailSpan>
        {isMobile ? (
          <img src={MailImage} alt="email" height="20px" />
        ) : (
          <img src={MailImage} alt="email" height="40px" />
        )}
        <LinkStyled href="mailto:office@collective-energy.at">
          office@collective-energy.at
        </LinkStyled>
      </MailSpan>
      <Partners>Partner</Partners>
      <PartnerContainer>
        <a href="https://humanventure.world" target="blank">
          <img src={HumanventureLogo} alt="Humanventure" />
        </a>
        <a href="https://www.hilfswerk.at/wien/" target="blank">
          <img src={HilfswerkLogo} alt="Wiener Hilfswerk" />
        </a>
        <a href="https://decent.ch" target="blank">
          <img src={DecentLogo} alt="Decent" />
        </a>
      </PartnerContainer>
    </Container>
  </Layout>
)

export default Kontakt
