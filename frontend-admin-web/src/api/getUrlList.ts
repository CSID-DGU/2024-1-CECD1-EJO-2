import { instance } from "./axios";

export const getUrlList = async () => {
  const response = await instance.get("/api/url-list");
  return response.data.data.url_list;
};