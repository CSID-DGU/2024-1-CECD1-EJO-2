export interface ButtonProps {
  //onClick?(): void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  route?: string;
  children?: React.ReactNode;
  width: string;
  height: string;
  margin?: string;
  padding?: string;
  background?: string;
  disabled?: boolean;
  dark?: boolean;
  type?: string;
  socialType?: string;
  backgroundColor?: string;
  backgroundSize?: string;
  borderRadius?: string;
  color?: string;
  fontSize?: number;
  zIndex?: number;
  position?: string;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  boxShadow?: string;
  fontWeight?: string;
}

export interface HomeButtonProps extends Partial<ButtonProps> {}

export interface FormSubmitButtonProps extends Partial<ButtonProps> {}

