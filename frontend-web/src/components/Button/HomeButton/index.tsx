import Button from '@/components/Button';
import { HomeButtonProps } from '@/types/button';

export default function HomeButton(props: HomeButtonProps) {
  return (
    <Button
      width="50px"
      height="auto"
      backgroundSize="auto"
      {...props}
      position={'absolute'}
      zIndex={1}
      color={'#FFFFFF'}
      fontSize={28}
      background='none'
      fontWeight='700'
    >
      {props.children}
    </Button>
  );
}
