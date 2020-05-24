import React from "react"
import styled from "@emotion/styled"

import SvgImagemap from "../components/Imagemap"
import SEO from "../components/seo"

import Logo from "../images/t4h-logo.png"

const Container = styled.div`
  max-height: 100vh;
  margin: 0;

  .logo {
    position: absolute;
    top: 30px;
    left: 20px;
  }
`

const IndexPage = () => (
  <Container>
    <SEO title="token4hope" />
    <img src={Logo} className="logo" hr />
    <SvgImagemap />
  </Container>
)

export default IndexPage
