import styled from 'styled-components';
import { IPageLayout } from '.';

export const Layout = styled.div<IPageLayout>`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: ${props => props.overflowY};
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  margin-top: 52px;
`;
