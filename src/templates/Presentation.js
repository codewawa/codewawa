import React, {Component } from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import ResourceLayout from '../components/ResourceLayout';
import { Link } from 'gatsby';
import theme from '../theme';
import SEO from '../components/seo';


const ContentWrapper = styled('div')`
  width:60%;
  margin:auto;
  height:100%;
  padding-top:1em;
  @media(max-width:1100px){
      width:calc(100% - 4em);
  }
`
const RatioContainer = styled.div`
width:100%;
position: relative;
padding-bottom: 56.25%; /* proportion value to aspect ratio 16:9 (9 / 16 = 0.5625 or 56.25%) */
height: 0;
overflow: hidden;
`
const Presentation = styled('iframe')`
position: absolute;
    top: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    overflow:hidden;
    border:0;
    border-radius:5px;
`
const Title = styled.h1`
    text-align:center;
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
export default class extends Component{
  constructor(props){
    super(props)
   
    console.log(props)
    // let path = ''

    // console.log(`../../${props.pageContext.resource.path.replace('./', '')}`,'../../classes/JS/presentations/resources/presentations/introduction-to-javascript.js')
    // import(props.pageContext.resource.path).then(pres => {this.setState({pres}); console.log(this.state)})
    // const RestaurantListComponent = lazy(() => import('./RestaurantList'));// code-splitted, on demand loaded component

    // (async () =>{
    //   this.setState({
    //     pres: require(props.pageContext.resource.path)
    //   }, () => console.log(this.state))
    // })


  }
  render = () => {
    const {resource} = this.props.pageContext
    console.log(this.props)
    return (
      <Layout>
      <SEO
      title={resource.title}
    />
      <ResourceLayout class={resource.class.id} active={resource.id}>
      <ContentWrapper>
      <Category color={resource.class.color}>
          <span>
            <Link to={`/class/${resource.class.id}`}>{resource.class.title}</Link> / {resource.lesson.title}</span>
        </Category>
              <Title>{resource.title}</Title>
       
        <RatioContainer>
      <Presentation src={`${typeof window !== 'undefined' && this.props.location.pathname}/present`} />
      </RatioContainer>
      </ContentWrapper>
      </ResourceLayout>
      </Layout>
    )
  }
}
