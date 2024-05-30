import Button from '..';
import { FormSubmitButtonProps } from '@/types/button';
import SearchIcon from '@/assets/icons/search.svg';
export default function FormSubmitButton(props: FormSubmitButtonProps) {
  return (
    <Button
      width="32px"
      height="32px"
      background={SearchIcon.src}
      {...props}
      position={'absolute'}
      right={7}
      top={14}
      zIndex={1}
    >
      {props.children}
    </Button>
  );
}
