import React from 'react';
import * as Style from './style';
import NavBar from '../NavBar';

export interface IPageLayout {
  children: React.ReactNode;
}

export default function PageLayout({ children }: IPageLayout) {
  return (
    <Style.Layout>
      <Style.Wrapper>
        {children}
        <NavBar />
      </Style.Wrapper>
    </Style.Layout>
  );
}
