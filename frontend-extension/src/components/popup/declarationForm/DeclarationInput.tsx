import { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';

interface DeclarationInputProps {
  value: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

/**
 * 텍스트를 입력할 수 있는 1line input 입니다.
 */
const DeclarationInput: React.FC<DeclarationInputProps> = ({ value, handleInputChange, placeholder }) => {
  return (
    <InputPadding>
      <Input placeholder={placeholder} onChange={handleInputChange} value={value} className="B1" />
    </InputPadding>
  );
};

export default DeclarationInput;

const InputPadding = styled.div`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;

  background-color: #f7f8fa;
  flex-grow: 1;
`;

const Input = styled.input``;
