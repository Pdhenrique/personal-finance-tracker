import { styledFButtonProps } from "./types"

import tokens from "../../tokens.json"
import styled, { css } from "styled-components"
import { switchProp } from "styled-tools"

const buttonSizes = {
  sm: css<styledFButtonProps>`
    height: 32px;
    padding: 4px 8px;
  `,
   md: css<styledFButtonProps>`
    height: 44px;
    padding: 10px 16px;
 `,
}

export const StyledFButton = styled.button<styledFButtonProps> `

  
  
  padding: 20px 35px 20px 35px;
  color: ${tokens.info};

  
  ${switchProp("size", buttonSizes)}
`
