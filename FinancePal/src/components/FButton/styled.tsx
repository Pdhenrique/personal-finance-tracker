import { Button, styled as mStyled} from "@mui/material"
import { FButtonProps } from "./types"

import styled, { css } from "styled-components"
import { switchProp } from "styled-tools"

const buttonSizes = {
  sm: css<FButtonProps>`
    height: 32px;
    padding: 4px 8px;
  `,
   md: css<FButtonProps>`
    height: 44px;
    padding: 10px 16px;
 `,
}

export const StyledFButton = styled.button<FButtonProps> `

  padding: 20px 35px 20px 35px;
  color: ${props => props.textColor};
  background-color: ${props => props.bgColor};

  border: none;

  ${switchProp("size", buttonSizes)};
`

export const StyledButton = mStyled(Button)`
  
` 