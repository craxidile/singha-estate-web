import {proxyGet} from "~/server/utils/proxy";

const CACHE_KEY = 'front-news-entries';

export default defineEventHandler(async (event) => {

  const query = getQuery(event);
  const { locale } = query;

  const apiBaseUrl = process.env.API_BASE_URL;
  const url = `${apiBaseUrl}/news-entries?populate[category]=*&populate[media][populate]=*`
    + `&locale=${locale}&sort[0]=id:desc&pagination[pageSize]=3`;

  return await proxyGet(url, query, CACHE_KEY);

});
