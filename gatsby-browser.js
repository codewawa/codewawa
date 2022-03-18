import React from 'react'
import { Global, css } from '@emotion/react'
import theme from './src/theme'
export const wrapRootElement = ({element}) => (
    <>
    <Global styles={css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Vampiro+One&display=swap');
    html, body, #___gatsby, #___gatsby > div{
        margin:0;
        padding:0;
        width:100%;
        height:100%;
    }
    body{
        background: ${theme.colors.dark};
        font-family:Montserrat;
    }
    `} />
    {element}
    </>
)
