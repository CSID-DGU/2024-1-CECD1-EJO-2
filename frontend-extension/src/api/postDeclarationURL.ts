import { isAxiosError } from 'axios';
import { instance } from './axios';

export const postReportUrl = async (url: string, type: string) => {
  try {
    const response = await instance.post(`/api/report`, {
      url: url,
      type: type,
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
