import { useQuery } from '@tanstack/react-query';
import { getUrl } from '@/app/api/getUrl';
import { getUrlQueryKey } from '@/constants/queryKeys';

export const useGetUrl = (url: string) => {
    return useQuery({
        queryKey: getUrlQueryKey(url).queryKey,
        queryFn: getUrlQueryKey(url).queryFn,
        enabled: !!url, // URL 값이 있는 경우에만 쿼리 실행
        staleTime: 10000,
        gcTime: 10000,
    });
}