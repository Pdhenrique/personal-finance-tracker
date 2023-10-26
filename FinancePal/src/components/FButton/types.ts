
export type styledFButtonProps = {
  size?: "sm" | "md" | "lg"
  bgColor?: string
  textColor?: string
}

export type FButtonProps = & styledFButtonProps & {
  "data-testid"?: string
  children: string
}