import { ButtonProps, Button } from "@chakra-ui/react";

interface Props extends ButtonProps {
  chidren?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const PrimaryButton = ({
  children,
  onClick,
  className,
  ...props
}: Props) => {
  return (
    <Button
      data-testid="primary-btn"
      className={"m-2 bg-blue-600 p-2 rounded-md " + className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};
