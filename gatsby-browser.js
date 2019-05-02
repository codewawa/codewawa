// custom typefaces
import "typeface-montserrat"
import React from 'react'
import {Global, css} from '@emotion/core'
import theme from './src/theme'
export const wrapRootElement = ({element}) => (
    <>
    <Global styles={css`
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