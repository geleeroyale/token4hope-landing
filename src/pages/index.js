import React from "react"
import styled from "@emotion/styled"

import SvgImagemap from "../components/Imagemap"
import SEO from "../components/seo"

const Container = styled.div`
  max-height: 100vh;
`

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <SvgImagemap />
  </Container>
)

export default IndexPage
