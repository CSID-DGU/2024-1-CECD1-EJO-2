"use client"

import * as Styled from './style';
import HomeButton from '../Button/HomeButton';
import { useRouter } from 'next/navigation';

type Props = {
  title?: string;
};

export default function NavBar({ title }: Props) {
  const router = useRouter();

  const handleNavigateHome = () => {
    router.push('/');
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
