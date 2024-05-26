import React from 'react';
import * as Style from './style';
import NavBar from '@/components/NavBar';

export interface IPageLayout {
  children: React.ReactNode;
  title?: string;
  overflowY?: string;
}

export default function PageLayout({ children, title, overflowY }: IPageLayout) {
  return (
    <>
      <Style.Layout overflowY={overflowY}>
        <Style.Wrapper>
          {children}
          <NavBar title={title} />
        </Style.Wrapper>
      </Style.Layout>
    </>
  );
}
