import axios from 'axios';

import { localeExists } from '~/server/utils/locales';
import { getCacheJson, setCacheJson } from '~/server/utils/cache';
import login from '~/server/utils/login';

export const proxyGet = async (url: string, query: any, cacheKey: string) => {

  const {locale = 'th'} = query;

  if (!await localeExists(locale as string)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid locale', stack: undefined });
  }

  const localedCacheKey = `${locale}-${cacheKey}`;

  let responseData = await getCacheJson(cacheKey);

  if (!responseData) {
    const token = await login();

    const response = await axios.get(url, { headers: { authorization: `Bearer ${token}` } });
    ({data: responseData = {}} = response);

    await setCacheJson(localedCacheKey, responseData);
  }

  return responseData;

};
