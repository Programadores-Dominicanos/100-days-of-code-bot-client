import { Input, InputProps } from "@nextui-org/react";

const TextField = (props: InputProps) => {
  const config: InputProps = {
    ...props,
  };
  return <Input {...config} />;
};

export default TextField;
