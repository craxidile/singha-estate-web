import { proxyGet } from '../../../utils/proxy';

const CACHE_KEY = 'front-articles';

export default defineEventHandler(async (event) => {

  const query = getQuery(event);
  const { locale } = query;

  const apiBaseUrl = process.env.API_BASE_URL;
  const url = `${apiBaseUrl}/articles?populate[category]=*&populate[tags]=*&populate[media][populate]=*`
    + `&locale=${locale}&sort[0]=id:desc&pagination[pageSize]=4`;

  return await proxyGet(url, query, CACHE_KEY);

});
