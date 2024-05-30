import { getUrl } from "@/app/api/getUrl";
import { TUrl } from "@/types/url";

export const getUrlQueryKey = (url: string) => {
    return {
        queryKey: ['urlInfo'],
        queryFn: async () => (await getUrl(url)),
    }
}