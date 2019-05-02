import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import theme from "../theme";
const PageWrapper = styled.div`
  width:100%;
  height:calc(100vh - 70px);
  background: hsla(0, 0%, 0%, .5);
padding-top:15vh;
  position: relative;
  @media(max-width:800px){
    padding-top:7vh;
  }
`

const Heading = styled.h1`
    color:hsla(0, 10%, 100%, 1);
    user-select: none;
    font-size:7em;
    text-align:center;
    margin: 0 0 .5em 0;
    font-family:Vampiro One;
`
const MoreButton = styled(Link)`
  all:unset;
    background:transparent;
    border:2px solid ${theme.colors.primary};
    color:white;
    padding:10px;
    border-radius:5px;
    width:20%;
    margin:auto;
    display: block;
    cursor: pointer;
    margin-top:10vh;
    text-align:center;
    font-family:Montserrat;
    &:hover{
      font-weight:bold;
    }
    @media(max-width: 600px){
      width:calc(100% - 4em);
    }
`
export default props => (
  <Layout location={props.location} title={'404'}>
    <SEO
      title="404"
    />
    <PageWrapper>
   
    <Heading>404 - Nie znaleziono</Heading>

    <MoreButton to="/classes">
      Zobacz kursy >
    </MoreButton>
    </PageWrapper>
  </Layout>
)