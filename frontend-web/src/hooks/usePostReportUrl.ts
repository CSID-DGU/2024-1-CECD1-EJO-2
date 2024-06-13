import { useMutation } from '@tanstack/react-query';
import { postReportUrl } from '@/app/api/postReportUrl';
import { TReportFormFields } from '@/types/url';

export const usePostReportUrl = () => {
    return useMutation({
        mutationFn: (urlData: TReportFormFields) => postReportUrl(urlData),
    });
};