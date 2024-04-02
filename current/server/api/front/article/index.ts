import axios from 'axios';

import login from '~/server/utils/login';
import { getCacheJson, setCacheJson } from '~/server/utils/cache';
import { localeExists } from '~/server/utils/locales';

const CACHE_KEY = 'front-articles';

export default defineEventHandler(async (event) => {

  const query = getQuery(event);
  const {locale = 'th'} = query;

  if (!await localeExists(locale as string)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid locale', stack: undefined });
  }

  const cacheKey = `${locale}-${CACHE_KEY}`;

  let responseData = await getCacheJson(cacheKey);

  if (!responseData) {
    const token = await login();

    const apiBaseUrl = process.env.API_BASE_URL;
    const url = `${apiBaseUrl}/articles?populate[category]=*&&populate[tags]=*&populate[media][populate]=*`
      + `&locale=${locale}&sort[0]=id:desc&pagination[pageSize]=4`;

    const response = await axios.get(url, { headers: { authorization: `Bearer ${token}` } });
    ({data: responseData = {}} = response);

    await setCacheJson(cacheKey, responseData);
  }

  return responseData;

});
