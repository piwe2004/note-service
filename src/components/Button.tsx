import styled from '@emotion/styled'
import { layout, color, border, display, typography, flexbox, space, position} from 'styled-system';
import { BoxProps } from './Box';



const Button = styled.button<BoxProps>`
    background-color: #fff;
    border:1px solid #ccc;
    height:32px; 
    width:64px;
    cursor: pointer;
    :hover{
        border-color:#06c;
        color:#06c;
    }
    ${layout}
    ${color}
    ${border}
    ${display}
    ${flexbox}
    ${typography}
    ${space}
    ${position}
`

export default Button;