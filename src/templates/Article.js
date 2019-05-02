import React, { useEffect, Component } from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import ResourceLayout from '../components/ResourceLayout';
import Prism from 'prismjs'
import '../utils/prism-github.css'
import theme from '../theme';
import { Link } from 'gatsby'
import SEO from '../components/seo';

const Content = styled('main')`
  background:white;
  padding:5em;  
  border-radius:10px;
  width: 50%;
  margin: 2em auto;
  padding: 3em;
 
  @media(max-width:600px){
    width:100%;
    padding:1em;
  }
  line-height: 2em;
  h1, h2,h3,h4,h5,h6{
    text-transform: uppercase;
    font-weight: bold;
  }
  img, embed, object, iframe{
    max-width:100%;
    margin:auto;
  }
`
const Header = styled.div`
width:80%;
margin: auto;

h1{
    text-align:center;
    font-size:5em;
    font-family:Montserrat;
    text-transform:uppercase;
    color:hsla(0, 0%, 100%, .95);
    margin-top:.2em;
    @media(max-width:600px){
      font-size:2em;
    }
    @media(max-width:400px){
      font-size:1.6em;
    }
}
img{
    width:100%;
    object-fit: cover;
    max-height:50vh;
    border-radius:10px;
    display: block;
    margin:auto;
    border:3px solid ${props => props.color};
}
@media(max-width:600px){
  width:calc(100% - 4em);
}
@media(max-width:400px){
  width:calc(100% - 2em);
}
`
const Category = styled.div`
margin-top:2em;
display: flex;
justify-content: center;
@media(max-width:400px){
  font-size:.8em;
}
  span{
    border-bottom:2px solid ${props => props.color};
    padding: 10px;
    color:${theme.colors.white};
    font-family:Montserrat;
  }
  a{
    all:unset;
    cursor:pointer;
    &:hover{
      text-decoration:underline;
    }
  }
`
const Wrapper = styled.div`
  // background:rgba(0,0,0,0.2);
`
export default class extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    Prism.highlightAll()
  }
  render(){
    const { resource } = this.props.pageContext
    return (
      <Layout>
        <SEO
      title={resource.title}
    />
        <ResourceLayout class={resource.class} active={resource.id}>
        <Wrapper>
        <Header color={resource.class.color}>
        <Category color={resource.class.color}>
          <span>
            <Link to={`/class/${resource.class.id}`}>{resource.class.title}</Link> / {resource.lesson.title}</span>
        </Category>
              <h1>{resource.title}</h1>
              <img src={typeof window !== 'undefined' && window.URL.createObjectURL(new Blob([new Uint8Array(resource.image.data)]))} />
             
            
          </Header>
      <Content>
      <div dangerouslySetInnerHTML={{__html: resource.contents}}></div>
      </Content>
      </Wrapper>
      </ResourceLayout>
      </Layout>
    )
  }
}

