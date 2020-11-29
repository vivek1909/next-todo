import { Button, ButtonProps } from "@chakra-ui/react";

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      m={2}
      onClick={props.onClick}
      type={props.type}
      background={props.background}
    >
      {props.name}
    </Button>
  );
};

export default PrimaryButton;