import axios from 'axios';

import login from '~/server/utils/login';
import {getCacheJson, setCacheJson} from "~/server/utils/cache";

const CACHE_KEY = 'front-news-entries';

export default defineEventHandler(async (event) => {

  const query = getQuery(event);
  const { locale = 'th' } = query;

  const cacheKey = `${locale}-${CACHE_KEY}`;

  let responseData = await getCacheJson(cacheKey);


  if (!responseData) {
    const token = await login();

    const apiBaseUrl = process.env.API_BASE_URL;
    const url = `${apiBaseUrl}/news-entries?populate[category]=*&populate[media][populate]=*`
      + `&locale=${locale}&sort[0]=id:desc&&pagination[pageSize]=3`;

    const response = await axios.get(url, { headers: { authorization: `Bearer ${token}` } });
    ({data: responseData = {}} = response);
    await setCacheJson(cacheKey, responseData);
  }

  return responseData;

});
