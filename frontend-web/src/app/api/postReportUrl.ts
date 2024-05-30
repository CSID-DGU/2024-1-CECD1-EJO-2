import { isAxiosError } from 'axios';
import { instance } from './axios';
import { TUrl } from '@/types/url';

export const postReportUrl = async (urlData: TUrl) => {
    try {
        const response = await instance.post(`/api/report`, {
            URL: urlData.url,
            type: urlData.type
        });
        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }
    }
};
