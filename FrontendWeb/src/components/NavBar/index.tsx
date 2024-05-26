import { useNavigate } from 'react-router-dom';
import * as Styled from './style';
import HomeButton from '@/components/Button/HomeButton';

type Props = {
  title?: string;
};

export default function NavBar({ title }: Props) {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };
  return (
    <Styled.NavBar>
      <HomeButton onClick={() => handleNavigateHome()}>
        DRL
      </HomeButton>
      <Styled.Title>{title}</Styled.Title>
    </Styled.NavBar>
  );
}
