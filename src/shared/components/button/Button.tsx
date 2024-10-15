import { Button as NextUIButton, ButtonProps } from "@nextui-org/react";

type CustomButtonProps = ButtonProps;

export const Button = ({
  children,
  ...props
}: CustomButtonProps): JSX.Element => {
  return <NextUIButton {...props}>{children}</NextUIButton>;
};
