import React from 'react'
import styled from '@emotion/styled';
import theme from '../theme'
import { useStaticQuery, Link, graphql } from 'gatsby';
import { Scrollbars } from 'react-custom-scrollbars';
const Sidebar = styled.aside`
    position: fixed;
    top:calc(70px + 1em);
    left:${props => props.open ? '0' : '-100%'};
    width:20%;
    height:calc(100vh - 70px - 2em);
    z-index:999;
    background:${theme.colors.lightDark};
    color:white;
    transition: .2s all;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    padding:1em;
    @media(max-width:800px){
      width:90%;
    }
`
const DropDown = styled.details`
  margin:1em 0;
 
  border-radius:5px;
  border:2px solid ${theme.colors.primary};
  color:${theme.colors.white};
  summary{
    outline:none;
    background:${theme.colors.primary};
    padding:.5em;
    color:${theme.colors.dark};
    font-weight:bold;
    font-family:Montserrat,sans-serif;
    user-select:none;
    cursor:pointer;
  }

 
`
const Resource = styled(Link)`
all:unset;
cursor:pointer;
user-select:none;

  h4{
    margin:0;
    padding: .8em .5em;
    color:${theme.colors.white};
    font-family:Montserrat,sans-serif;
    border-bottom:3px solid ${theme.colors.dark};
  }
  
`
const Classes = styled(Scrollbars)`
  // overflow:scroll;
  height:100%;
`
const _Class = styled.details`
margin:1em 0;

  & > summary{
    padding:1em;
    background: ${theme.colors.dark};
    border-radius:5px;
    outline:0;
    font-family:Montserrat;
    font-weight:bold;
    border-left:3px solid ${theme.colors.primary};
    transition:.2s all;
    cursor:pointer;
    &:hover{
      padding-left:calc(1em + 10px);
    }
  }

`
export default props => {
    const data = useStaticQuery(graphql`
           {
          allClassData {
            edges {
              node {
                id
                title
                desc
                color,
                imageUrl,
                childrenLessonData{
                  title,
                  id,
                  childrenResourceData{
                    title,
                    type,
                    id,
                    path,
                    imageFile
                  }
                }
              }
            }
          }
        }
    `).allClassData.edges.map(x => x.node)

    console.log(data)
    return (
        <Sidebar {...props}>
        
            <Classes>
            {
              data.map(_class => (
              <_Class>
                <summary>{_class.title}</summary>
                {
                _class.childrenLessonData.map((lesson) => (
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
            ))
              }
              </_Class>
              ))
            }
             </Classes>
        </Sidebar>
    )
}
