import { useEffect } from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';
import DeclarationSelect from './DeclarationSelect';
import DeclarationInput from './DeclarationInput';
import DeclarationButton from './DeclarationButton';
import { declarationOptions, declarationReasonToOption } from './DeclarationEnum';

/**
 *
 * @returns 신고 URL과 사유를 입력하는 폼입니다.
 */
const DeclarationForm = () => {
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
  });

  const handleSubmit = () => {
    if (submittedReason && submittedURL) {
      alert(`신고 사유: ${declarationReasonToOption(submittedReason)}, URL: ${submittedURL}\n신고되었습니다.`);

      setSubmittedReason('');
      setSubmittedURL('');
    } else {
      alert('모든 필드를 입력해 주세요.');
    }
  };

  return (
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
