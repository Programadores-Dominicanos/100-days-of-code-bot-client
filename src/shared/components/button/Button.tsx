import { Button as NextUIButton, ButtonProps } from "@nextui-org/react";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const Button = ({
  children,
  ...props
}: CustomButtonProps): JSX.Element => {
  return <NextUIButton {...props}>{children}</NextUIButton>;
};
