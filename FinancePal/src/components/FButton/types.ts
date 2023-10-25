import tokens from "../../tokens.json" 

export type styledFButtonProps = FButtonProps & {
  size?: "sm" | "md" | "lg"
  bgColor?: typeof tokens
}

export type FButtonProps = {
  "data-testid"?: string
  children: string
}