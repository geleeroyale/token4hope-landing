import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  grid-gap: 1rem;
  align-content: center;
  place-items: center;
  position: relative;
  margin: 0;
  color: #fbc707;
  min-height: 70vh;
  @media (max-width: 650px) {
    grid-template-columns: auto;
    padding-bottom: 3rem;
  }
`

const Headline = styled.h2`
  grid-row: 1;
  grid-column: 2;
  font-size: 3rem;
  font-weight: 300;
  align-self: center;
  padding-bottom: 2rem;
`

const BodyText = styled.p`
  grid-row: 2;
  grid-column: 2;
  font-weight: 100;
  font-size: 1.4rem;
  padding-bottom: 2rem;
`

const CTA = styled.h3`
  grid-row: 3;
  grid-column: 2;
  font-weight: 700;
  font-size: 3rem;
`

const CTAButton = styled.button`
  grid-row: 4;
  grid-column: 2;
  font-weight: 700;
  font-size: 2rem;
  background-color: #ffffff00;
  cursor: pointer;
  padding: 0.5rem;
  border: 0;
  border: 1px solid #fbc707;
  border-radius: 20px;

  :hover,
  :focus {
    background: whitesmoke;
  }

  :focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  :active {
    transform: scale(0.99);
  }
`

const LinkStyled = styled(Link)`
  color: #fbc707;
  text-decoration: none;
`

const IndexPage = () => (
  <Layout>
    <SEO title="token4hope" />
    <Container>
      <Headline>
        Das erste transparente Spenden- und Impact Tracking-System
      </Headline>
      <BodyText>
        Token4Hope löst das Problem mangelnder Transparenz und
        Nachverfolgbarkeit von Spenden mithilfe der Blockchain-Technologie und
        garantiert die sachgemäße Verwendung des gespendeten Geldes zu dessen
        vorgesehenem Zweck.
      </BodyText>
      <CTA>KNOW & SHOW YOUR IMPACT</CTA>

      <CTAButton>
        <LinkStyled to="/kontakt">Kontakt aufnehmen</LinkStyled>
      </CTAButton>
    </Container>
  </Layout>
)

export default IndexPage
