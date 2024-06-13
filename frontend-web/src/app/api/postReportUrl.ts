import { isAxiosError } from 'axios';
import { instance } from './axios';
import { TReportFormFields } from '@/types/url';

export const postReportUrl = async (urlData: TReportFormFields) => {
    try {
        const response = await instance.post(`/api/report`, {
            url: urlData.url,
            type: urlData.reportOption
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
