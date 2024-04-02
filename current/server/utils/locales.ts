import {getCacheJson, setCacheJson} from "~/server/utils/cache";
import login from "~/server/utils/login";
import axios from "axios";

const CACHE_KEY = 'locales';

export const listLocales = async (): Promise<any[]> => {
  let locales = await getCacheJson(CACHE_KEY);

  if (!locales) {
    const token = await login();

    const apiBaseUrl = process.env.API_BASE_URL;
    const url = `${apiBaseUrl}/i18n/locales`;

    const response = await axios.get(url, {headers: {authorization: `Bearer ${token}`}});
    ({data: locales = []} = response);

    await setCacheJson(CACHE_KEY, locales);
  }

  return locales;
};

export const localeExists = async (locale: string): Promise<boolean> => {
  const locales = await listLocales();
  return locales.some((l: any) => l.code === locale);
};
