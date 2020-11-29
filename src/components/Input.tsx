import { Input, InputProps } from "@chakra-ui/react";

export const PrimaryInput = (props: InputProps) => {
  return (
    <Input
      w={props.w}
      type="text"
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      required
    />
  );
};
