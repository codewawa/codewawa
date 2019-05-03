import React from 'react'
import styled from '@emotion/styled';
import theme from '../theme'
import { Link } from 'gatsby';
const Navbar = styled.div`
    position: fixed;
    top:0;
    left:0;
    height:50px;
    width:80%;
    background:hsla(0, 10%, 0%, 1);
    z-index:9999;
    padding:10px 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Brand = styled(Link)`
    all:unset;
    color:hsla(0, 10%, 100%, 1);
    user-select: none;
    cursor: pointer;
    font-size:2em;
    font-family:Vampiro One;
    span{
        color:${theme.colors.primary};
    }
`
// const SearchInput = styled.input`
//     outline:none;
//     border:none;
//     background:transparent;
//     padding:5px 10px;
//     margin: 0 2em;
//     color:white;
//     font-family:Montserrat;
//     border-bottom:2px solid ${theme.colors.lightDark};
//     width:calc(40vw);
//     font-size:1.2em;
//     transition:.2s all;
//     &:focus{
//         border-bottom:1px solid ${theme.colors.primary};
//         border-top-left-radius:3px;
//         border-top-right-radius:3px;
//         background:${theme.colors.lightDark};
//     }
// `
const VerticalCenter = styled.div`
    display: flex;
    align-items: center;
`
const NavLink = styled(Link)`
    all:unset;
    display: block;
    cursor:pointer;
    color:${theme.colors.white};
    border-bottom:2px solid transparent;
    &:hover{
        border-bottom:2px solid ${theme.colors.primary};
    }
`
export default (props) => {
    // const [searchQuery, setSearchQuery] = useState('')
    // let prevQuery = null
    // useEffect(() => {
    //     if(prevQuery !== searchQuery && searchQuery){
    //         prevQuery = searchQuery
    //         navigate(`/search?q=${searchQuery}`)
    //     }
    // })
    return (
        <Navbar>
            <VerticalCenter>
            <Brand to="/">Code<span>wawa</span></Brand>
        
            
            </VerticalCenter>
            <VerticalCenter>
            
            <NavLink to="/classes">{typeof window !== 'undefined' && window.innerWidth < 400 ? 'Kursy' : 'Wszystkie kursy'}</NavLink>
            </VerticalCenter>
        </Navbar>
    )
}