import { useEffect } from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import DeclarationSelect from './DeclarationSelect';
import DeclarationInput from './DeclarationInput';
import DeclarationButton from './DeclarationButton';
import { declarationOptions, declarationReasonToOption } from './DeclarationEnum';
import { postReportUrl } from '@root/src/api/postDeclarationURL';

import icon_not_dangerouse from '../icon/not_dangerous.svg';

/**
 *
 * @returns 신고 URL과 사유를 입력하는 폼입니다.
 */
const DeclarationForm = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [submittedReason, setSubmittedReason] = useState('');
  const handlesubmittedReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSubmittedReason(event.target.value);
  };

  const [submittedURL, setSubmittedURL] = useState('');
  const handleSubmittedURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmittedURL(event.target.value);
  };

  const [isAble, setIsAble] = useState(false);
  useEffect(() => {
    if (submittedReason == '' || submittedURL == '') {
      setIsAble(false);
    } else {
      setIsAble(true);
    }
  }, [submittedReason, submittedURL]);

  const handleSubmit = () => {
    if (submittedReason && submittedURL) {
      postReportUrl(submittedURL, submittedReason);

      setIsSearched(true);
    } else {
      alert('모든 필드를 입력해 주세요.');
    }
  };

  return isSearched ? (
    <ResultTitle>
      <img src={icon_not_dangerouse} alt="Safe site" />
      <ResultLabel className="B1 not_dangerous">신고가 완료되었습니다.</ResultLabel>
    </ResultTitle>
  ) : (
    <InputFromWrapper>
      <DeclarationSelect
        value={submittedReason}
        handleSelectChange={handlesubmittedReasonChange}
        options={declarationOptions}
      />
      <InputWrapper>
        <DeclarationInput
          value={submittedURL}
          handleInputChange={handleSubmittedURLChange}
          placeholder={'악성 URL을 신고해주세요.'}
        />
        <DeclarationButton label={'신고'} isAble={isAble} onClick={handleSubmit} />
      </InputWrapper>
    </InputFromWrapper>
  );
};

export default DeclarationForm;

const InputFromWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
`;

const ResultTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  .img {
    width: 20px;
    height: 20px;
  }
  .dangerous {
    color: #f64258;
  }
  .not_dangerous {
    color: #343434;
  }

  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    line-height: calc(28 / 16);
  }
`;

const ResultLabel = styled.div`
  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    line-height: calc(28 / 16);
  }
`;
