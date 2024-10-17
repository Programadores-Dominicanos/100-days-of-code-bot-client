import { Input, InputProps } from "@nextui-org/react";

type TextFieldProps = InputProps & {};

const TextField = (props: TextFieldProps) => {
  const config: InputProps = {
    ...props,
  };
  return <Input {...config} />;
};

export default TextField;
