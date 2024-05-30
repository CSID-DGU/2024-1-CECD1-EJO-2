import { SearchResult } from '@root/src/pages/models/SearchResult';
import { styled } from 'styled-components';

import icon_dangerouse from '../icon/dangerous.svg';
import icon_not_dangerouse from '../icon/not_dangerous.svg';

const PopupResult = (result: SearchResult) => {
  return result.type == 'dangerous' ? (
    <ResultWrapper>
      <ResultTitle>
        <img src={icon_dangerouse} alt="Dangerous site" />
        <ResultLabel className="B1 dangerous">의심되는 사이트입니다.</ResultLabel>
      </ResultTitle>
      <DescriptionLabel className="B1">{result.description}</DescriptionLabel>
    </ResultWrapper>
  ) : (
    <ResultTitle>
      <img src={icon_not_dangerouse} alt="Safe site" />
      <ResultLabel className="B1 not_dangerous">안전한 사이트입니다.</ResultLabel>
    </ResultTitle>
  );
};

export default PopupResult;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResultTitle = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  .img {
    width: 24px;
    height: 24px;
  }
  .dangerous {
    color: #f64258;
  }
  .not_dangerous {
    color: #3ece1a;
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

const DescriptionLabel = styled.div`
  width: 100%;
  word-wrap: break-word;
  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 16px;
    line-height: calc(28 / 16);
  }
`;
