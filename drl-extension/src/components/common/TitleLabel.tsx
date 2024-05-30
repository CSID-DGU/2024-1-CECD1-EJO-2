import { styled } from 'styled-components';

const LabelContent = styled.div`
  &.title {
    padding: 0rem 0.5rem;
  }
`;

const TitleLabel = ({ children, className }) => {
  return <LabelContent className={className}>{children}</LabelContent>;
};
export default TitleLabel;
