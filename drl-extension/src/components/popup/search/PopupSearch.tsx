import { styled } from 'styled-components';

const SearchWrapper = styled.div`
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;

  background-color: #f7f8fa;
`;

const SearchInput = styled.input`
  flex-grow: 1;
`;

const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const PopupSearch = ({ getIsSearched }) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputValue = event.currentTarget.value;
      getIsSearched(inputValue, true);
    }
  };

  return (
    <SearchWrapper>
      <SearchInput placeholder="의심되는 URL을 검색해보세요." className="B1" onKeyDown={handleKeyPress} />
      <SearchIcon src="/icon/search.svg" />
    </SearchWrapper>
  );
};
export default PopupSearch;
