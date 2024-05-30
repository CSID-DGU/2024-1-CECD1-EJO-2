import { useMutation } from '@tanstack/react-query';
import { postReportUrl } from '@/app/api/postReportUrl';
import { TUrl } from '@/types/url';

export const usePostReportUrl = () => {
    return useMutation({
        mutationFn: (urlData: TUrl) => postReportUrl(urlData),
    });
};