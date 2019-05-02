import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled";
import theme from "../theme";
import Container from "../components/Container";

const Grid = styled.div`
    display:grid;
    padding-top:1em;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap:1em;
    grid-row-gap:1.5em;
    grid-auto-rows: 1fr;
    @media(max-width:1100px){
      grid-template-columns:1fr 1fr;
    }
    @media(max-width:680px){
      grid-template-columns:1fr;
    }
`
const Card = styled(Link)`
    all:unset;
    cursor:pointer;
    border:5px solid ${theme.colors.lightDark};
    border-radius:3px;
    color:hsla(0, 10%, 100%, 1);

    img{
        width:100%;
        height:100%;
        display: block;
        max-height:20vh;
        object-fit: cover;
        margin:0 auto;
        transition: .2s all;
    }
    .image-wrapper{
        background:hsla(0, 10%, 100%, 1);
        max-height:20vh;
        
        overflow: hidden;
        border-top-left-radius:3px;
        border-top-right-radius:3px;
    }
    .info{
        padding:1em;
        p{
            margin:0;
        }
    }
    h2{
        margin-top:0;
    }
    &:hover img{
        transform: scale(1.1);
    }
`
const PageHeader = styled.h1`
color:hsla(0, 10%, 100%, 1);
`
export default class extends React.Component {
    constructor(props){
        super(props)
    }
  render() {
    console.log(this.props)
    const classes = this.props.data.allClassData.edges.map(x => x.node)
    return (
      <Layout location={this.props.location} title={'Codewawa'}>
        <SEO
          title="Wszystkie kursy"
        />
        <Container>
        <PageHeader>Kursy</PageHeader>
        <Grid>
        {
            classes.map(_class => (
                <Card to={`/class/${_class.id.toLowerCase()}`}>
                    <div className="image-wrapper">
                    <img src={_class.imageUrl}></img>

                    </div>
                    <div className="info">
                    <h2>{_class.title}</h2>
                    <p>{_class.desc}</p>
                    </div>
                </Card>
            ))
        }
        </Grid>
        </Container>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
       {
          allClassData {
            edges {
              node {
                id
                title
                desc
                color,
                imageUrl
              }
            }
          }
        }
`
