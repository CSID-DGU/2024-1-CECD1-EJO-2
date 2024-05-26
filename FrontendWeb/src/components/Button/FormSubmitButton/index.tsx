import Button from '@/components/Button';
import { FormSubmitButtonProps } from '@/types/button';

export default function FormSubmitButton(props: FormSubmitButtonProps) {
  return (
    <Button
      width="24px"
      height="auto"
      backgroundSize="auto"
      {...props}
      position={'absolute'}
      zIndex={1}
      background='none'
    >
      {props.children}
    </Button>
  );
}
