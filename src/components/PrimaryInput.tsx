import { InputProps, Input } from "@chakra-ui/react";

export const PrimaryInput = ({
  value,
  placeholder,
  className,
  onChange,
  ...props
}: InputProps) => {
  return (
    <Input
      className={"bg-transparent p-2 m-2 " + className}
      type="text"
      data-testid="primary-input"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required
      {...props}
    />
  );
};
