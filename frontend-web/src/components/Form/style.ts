import styled from 'styled-components';
import theme from '../../theme';
import { IFormInputStyleProps } from '.';

export const Form = styled.form<{ alignItems?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
`;

export const Input = styled.input<IFormInputStyleProps>`
  flex: 1; /* 각 입력 필드가 균등하게 너비를 차지하도록 설정 */
  margin: 6px 0 24px 0;
  padding: 12px;
  border: none;
  border: 1.5px solid ${props => props.borderColor || theme.colors.formBorder};
  border-radius: 8px;
  font-size: 20px;
  color: ${theme.colors.title1};
  min-width: 0px;
  width: ${props => props.width || '55%'};
`;

export const Label = styled.label`
  margin-top: 20px;
  font-size: 17px;
  font-weight: 400;
  color: ${theme.colors.title1};
  margin: 20px 0;
`;

export const Text = styled.p``;

export const StyledSelect = styled.select`
  width: 40%;
  padding: 16px 8px;
  margin: 6px 0 24px 0;
  border: none;
  border-radius: 10px;
  font-size: 17px;
  color: ${theme.colors.title1};
  background-color: white;
  -webkit-appearance: none; /* 크롬, 사파리에서 기본 화살표 제거 */
  -moz-appearance: none; /* 파이어폭스에서 기본 화살표 제거 */
  appearance: none; /* 최신 브라우저에서 기본 화살표 제거 */
  background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center; /* 화살표 위치 조정 */
  &:focus {
    outline: none;
    border-color: ${theme.colors.formBorder};
  }
`;

export const StyledOption = styled.option`
  padding: 8px;
`;
