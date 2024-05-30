import styled from 'styled-components';
import { IPageLayout } from '.';

export const Layout = styled.div<IPageLayout>`
  width: 100dvw;
  min-height: 100dvh;
  display: flex;
  flex-direction: column; // 자식 요소들을 세로로 정렬
  justify-content: flex-start; // 상단에서부터 콘텐츠 시작
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto; // 자동 마진으로 중앙 정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // 세로 방향 정렬은 시작 지점에서
`;
