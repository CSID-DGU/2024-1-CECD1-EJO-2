import { ChangeEventHandler } from 'react';
import { styled } from 'styled-components';

interface DeclarationSelectProps {
  value: string;
  handleSelectChange: ChangeEventHandler<HTMLSelectElement>;
  options: any[];
}

/**
 * 신고 타입을 선택할 수 있는 select 입니다
 */
const DeclarationSelect: React.FC<DeclarationSelectProps> = ({ value, handleSelectChange, options }) => {
  return (
    <SelectWrapper className="B1" value={value} onChange={handleSelectChange}>
      <option value="" selected disabled hidden>
        --- 선택 ---
      </option>
      {options.map(item => {
        return <option value={item.value}>{item.description}</option>;
      })}
    </SelectWrapper>
  );
};

export default DeclarationSelect;

const SelectWrapper = styled.select`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #f7f8fa;
`;
