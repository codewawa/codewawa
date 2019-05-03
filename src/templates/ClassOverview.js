import React from 'react'
import Layout from '../components/layout'
import styled from '@emotion/styled'
import ResourceLayout from '../components/ResourceLayout';
import Container from '../components/Container';
import theme from '../theme';
import { Link } from 'gatsby';
import SEO from '../components/seo';

const PageHeader = styled.h1`
  color:${theme.colors.white};
  width:70%;
  display: block;
  margin:1em auto 0 auto;
  @media(max-width:1100px){
    width:100%;
  }
`
const DropDown = styled.details`
  width:70%;
  margin:1em auto;
 
  border-radius:5px;
  border:2px solid ${theme.colors.primary};
  color:${theme.colors.white};
  summary{
    outline:none;
    background:${theme.colors.primary};
    padding:1em;
    color:${theme.colors.dark};
    font-weight:bold;
    font-family:Montserrat,sans-serif;
    user-select:none;
    cursor:pointer;
  }
  @media(max-width:1100px){
    width:100%;
  }
 
`
const Resource = styled(Link)`
all:unset;
cursor:pointer;
user-select:none;

  h4{
    margin:0;
    padding: 1em;
    color:${theme.colors.white};
    font-family:Montserrat,sans-serif;
    border-bottom:3px solid ${theme.colors.lightDark};
  }
  
`
export default props => {
  const _class = props.pageContext.class
    return (
      <Layout>
        <SEO
      title={_class.title}
    />
        <ResourceLayout class={_class} active={null}>
        <Container>
      <PageHeader>{_class.title}</PageHeader>
        
      {_class.childrenLessonData.map((lesson) => (
        <DropDown>
      
      <summary>{lesson.title}</summary>
      {
        lesson.childrenResourceData.map(resource => {
          return (
            <Resource to={`/class/${resource.id}`}>
              <h4>{resource.title}</h4>
        </Resource>
          )
        })
      }
    </DropDown>
      ))}
      </Container>
      </ResourceLayout>
      </Layout>
    )
}
