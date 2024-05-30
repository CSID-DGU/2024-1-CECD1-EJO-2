import { SearchResult } from '../models/SearchResult';

export const getSearchResult = (url: string): SearchResult => {
  switch (url) {
    case 'http://dangerous.site/':
      return {
        type: 'dangerous',
        description: `분석결과 ${url} 사이트는 악성 사이트로 판별됩니다. 암호화가 되지 않은 사이트는 보안에 문제가 있을 수 있습니다.`,
      };
    default:
      return {
        type: 'not_dnagerous',
        description: url,
      };
  }
};
