import login from "~/server/utils/login";
import axios from "axios";
import {getCacheJson, setCacheJson} from "~/server/utils/cache";

const CACHE_KEY = 'locales';

export default defineEventHandler(async (event) => {

  const { locale } = getQuery(event);

  let locales = await getCacheJson(CACHE_KEY);

  if (!locales) {
    const token = await login();

    const apiBaseUrl = process.env.API_BASE_URL;
    const url = `${apiBaseUrl}/i18n/locales`;

    const response = await axios.get(url, {headers: {authorization: `Bearer ${token}`}});
    ({data: locales = []} = response);

    await setCacheJson(CACHE_KEY, locales);
  }

  return {
    success: locales.some((l: any) => l.code === locale),
  };

});
