import React from "react"
import { Link } from "gatsby"
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
const VideoWrapper = styled.video`
position: absolute;
top:0;
left:0;
  width:100%;
  height:100%;
  z-index:-1; 
  object-fit: cover;
  filter: blur(20px);
`
const Brand = styled.h1`
    color:hsla(0, 10%, 100%, 1);
    user-select: none;
    font-size:7em;
    text-align:center;
    margin: 0 0 .5em 0;
    font-family:Vampiro One;
    
    mark{
       all:unset;
        color:${theme.colors.primary};
    }
      span, mark{
        @media(max-width:800px){
          display:block;
        }
      }
`
const Description = styled.p`
    text-align:center;
    color:${theme.colors.white};
    width:100%;
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
export default props => {
  return (
    <Layout location={props.location} title={'Codewawa'}>
      <SEO
        title="Home"
      />
      <PageWrapper>
      <VideoWrapper loop autoPlay>
        <source src="/assets/coding.mp4" type="video/mp4" />
        </VideoWrapper>
      <Brand><span>Code</span><mark>wawa</mark></Brand>
      <Description>
        Projekt Pracowni Projektowania Stron Internetowych w Pałacu Młodzieży w Warszawie.
      </Description>
      <MoreButton to="/classes">
        Zobacz kursy >
      </MoreButton>
      </PageWrapper>
    </Layout>
  )
}