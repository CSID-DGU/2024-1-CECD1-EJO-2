import styled from 'styled-components';
import theme from '@/theme';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 44px;
  font-weight: 200;
  color: ${theme.colors.title1};
  margin: 120px 0 40px 0;
`;

export const Discription = styled.h2`
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 16px;
  font-weight: 200;
  color: ${theme.colors.title2};
  white-space: pre-line;
  text-align: center;
  line-height: 1;
  margin: 0 0 60px 0;
`;

export const Text = styled.p`
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 12px;
    font-weight: 200;
    color: ${theme.colors.title3};
    white-space: pre-line;
    text-align: center;
    line-height: 1.5;
    margin: 12px 0 40px 0;
`;

export const ReportWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 40%;
    margin-top: 120px;
    background-color: ${theme.colors.lightGrayWrapper};
    padding: 30px;
`;
