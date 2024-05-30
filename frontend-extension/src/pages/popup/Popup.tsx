import { styled } from 'styled-components';

import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';

import TitleLabel from '@root/src/components/common/TitleLabel';
import DeclarationForm from '@root/src/components/popup/declarationForm/DeclarationForm';

const Popup = () => {
  return (
    <PopupWrapper>
      <TitleLabel className={'H6 title'}>악성 URL 신고</TitleLabel>
      <DeclarationForm />
    </PopupWrapper>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);

const PopupWrapper = styled.div`
  width: 480px;
  padding: 2rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* border: 1px solid #3c96e9; */
`;
