import { styled } from 'styled-components';

interface DeclarationButtonProps {
  label: string;
  isAble: boolean;
  onClick: () => void;
}

const DeclarationButton: React.FC<DeclarationButtonProps> = ({ label, isAble, onClick }) => {
  return isAble ? (
    <InputButton className="B1" onClick={onClick}>
      {label}
    </InputButton>
  ) : (
    <InputButtonDisable className="B1">{label}</InputButtonDisable>
  );
};

export default DeclarationButton;

const InputButton = styled.div`
  width: 6rem;
  padding: 0.5rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  background-color: #3c96e9;

  border-radius: 0.5rem;

  cursor: pointer;
`;

const InputButtonDisable = styled.div`
  width: 6rem;
  padding: 0.5rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #292929;
  background-color: #f7f8fa;

  border-radius: 0.5rem;
`;
