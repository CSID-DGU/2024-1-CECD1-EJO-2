import { instance } from './axios';

export const getUrl = async (url: string) => {
  const response = await instance.get('/api/url', {
    params: { url },
  });
  return response.data.data;
};
