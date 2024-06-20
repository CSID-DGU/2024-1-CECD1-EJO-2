import { getUrlListQueryKey } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetUrlList = () => {
  const {
    data: reportedUrlData,
  } = useQuery({
    queryKey: getUrlListQueryKey().queryKey,
    queryFn: getUrlListQueryKey().queryFn,
    staleTime: 6000000, // 100분
    gcTime: 6000000, // 캐시 유지 시간
  });
  return { reportedUrlData };
};
