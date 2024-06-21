import { SearchResult } from '@root/src/pages/models/SearchResult';
import { styled } from 'styled-components';

import icon_dangerouse from '../icon/dangerous.svg';
import icon_not_dangerouse from '../icon/not_dangerous.svg';
import { getUrl } from '@root/src/api/getUrl';
import { useEffect } from 'react';
import { useState } from 'react';
interface PopupResultProps {
  url: string;
}

const PopupResult: React.FC<PopupResultProps> = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState<SearchResult>({ is_malicious: false, description: '' });

  const fetchData = async () => {
    if (url != '') {
      setIsLoading(true);
      try {
        const result: SearchResult = await getUrl(url);
        setIsLoading(false);
        setData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return (
    <ResultWrapper>
      {!isLoading ? (
        data.is_malicious ? (
          <>
            <ResultTitle>
              <img src={icon_dangerouse} alt="Dangerous site" />
              <ResultLabel className="B1 dangerous">의심되는 사이트입니다.</ResultLabel>
            </ResultTitle>

            <DescriptionLabel className="B2">{data.description}</DescriptionLabel>
          </>
        ) : (
          <>
            <ResultTitle>
              <img src={icon_not_dangerouse} alt="Safe site" />
              <ResultLabel className="B1 not_dangerous">안전한 사이트입니다.</ResultLabel>
            </ResultTitle>
          </>
        )
      ) : (
        <>
          <ResultTitle>
            <Spinner className="loader" />
            <ResultLabel className="B1 not_dangerous">사이트를 분석중입니다.</ResultLabel>
          </ResultTitle>
          <UrlLabel>{url}</UrlLabel>
        </>
      )}
    </ResultWrapper>
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

const DescriptionLabel = styled.div`
  .B2 {
    letter-spacing: -0.25px;
    font-family: Pretendard-Regular;
    font-size: 0.875rem;
    line-height: calc(24 / 14);
  }

  word-break: break-all;

  color: lightgray;
`;

const UrlLabel = styled.div`
  padding: 4px;
  width: 100%;
  word-wrap: break-word;
  .B1 {
    letter-spacing: -0.5px;
    font-family: Pretendard-Regular;
    font-size: 12px;
    line-height: calc(28 / 16);
  }
  color: #dddddd;
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid lightgray;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
