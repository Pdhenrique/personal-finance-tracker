import { StyledFButton } from "./styled"
import { FButtonProps } from "./types"


export const FButton: React.FC<FButtonProps> = ({
   children,
   bgColor,
   textColor,
  ...props
}) => {

  return (
    <StyledFButton 
      {...props}
      size="sm" 
      type="button" 
      bgColor={bgColor} 
      textColor={textColor} 
    >
      {children}
    </StyledFButton>
  )
}
