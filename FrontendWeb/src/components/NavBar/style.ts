import styled from 'styled-components';
import theme from '@/theme';

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 52px;
  background-color: #3c96e8;
  z-index: 1;
  position: fixed;
  top: 0;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: ${theme.colors.whiteText};
`;
