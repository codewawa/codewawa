import React from "react"
import Navbar from "./Navbar";
import styled from "@emotion/styled";

const PageWrapper = styled.div`
  padding-top:70px;
  min-height:100%;
  width:100%;
`
class Layout extends React.Component {
  render() {
    
    return (
      <>
        <Navbar />
        <PageWrapper>
        {this.props.children}
        </PageWrapper>
   
     
      </>
    )
  }
}

export default Layout
