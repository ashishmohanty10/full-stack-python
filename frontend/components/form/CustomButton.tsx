import { Button } from "../ui/button";

interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  className,
  onClick,
}) => {
  return (
    <Button onClick={onClick} className={`w-full py-4 ${className}`}>
      {label}
    </Button>
  );
};

export default CustomButton;
