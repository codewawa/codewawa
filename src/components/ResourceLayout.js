import React, { useState } from 'react'
import styled from '@emotion/styled'


import theme from '../theme'
import Sidebar from './Sidebar';
const ResourceWrapper = styled.div`
    position: relative;
    width:100%;
    height:100%;
 
`
const ContentWrapper = styled.div`
    margin-left:${props => props.full ? '0' : '20vw'};
    width:${props => props.full ? '100%' : 'calc(100% - 20vw)'};
    transition: .2s all;
    @media(max-width:1100px){
        margin-left:0;
        width:100%;
      }
`
const SidebarSwitch = styled.div`
    position: fixed;
    top:75px;
    left:calc(${props => props.open ? '20vw' : '0px'} + 15px);
    padding:10px;
    border-radius:50%;
    background: ${theme.colors.primary};
    width:2em;
    height:2em;
    transition: .2s all;
    display: flex;
    align-items:center;
    text-align:center;
    justify-content: center;
    color:${theme.colors.dark};
    cursor:pointer;
    z-index:1000;
    span{
        font-size:2em;
        transition: .2s all;    
        transform: ${props => props.open ? 'translate(-10%, 7%) rotate(182deg)' : 'translate(10%, -7%)'};
    }
    @media(max-width:1100px){
        top:auto;
        bottom:20px;
        left:20px;
        width:2.5em;
        height:2.5em;
        span{
            font-size:2em;
        }
      }
`
const ResourceLayout = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <ResourceWrapper >
            <SidebarSwitch onClick={() => setOpen(!open)} open={open}
            
            >
            <span dangerouslySetInnerHTML={{__html: '&rtrif;'}}>

            </span>
            </SidebarSwitch>
       <Sidebar open={open} />
            <ContentWrapper full={!open}>
            {props.children}
            </ContentWrapper>
        </ResourceWrapper>
    )
}
export default ResourceLayout