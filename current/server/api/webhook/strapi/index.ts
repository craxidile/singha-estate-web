import cache, {setCacheJson} from "~/server/utils/cache";
import axios from "axios";

export default defineEventHandler(async (event) => {

  const body = await readBody(event);

  const {model} = body;

  const token = await login();

  const apiBaseUrl = process.env.API_BASE_URL;
  const url = `${apiBaseUrl}/i18n/locales`;

  const response = await axios.get(url, {headers: {authorization: `Bearer ${token}`}});
  const {data: locales = []} = response;
  const localeCodes = locales.map((locale: any) => locale.code);

  await setCacheJson('locales', locales);

  const keysToDelete: string[] = [];

  if (model === 'article') {
    keysToDelete.push('front-articles');
  } else if (model === 'news-entry') {
    keysToDelete.push('front-news-entries');
  }

  for (const keyToDelete of keysToDelete) {
    for (const localeCode of localeCodes) {
      await cache.del(`${localeCode}-${keyToDelete}`);
    }
  }


  return {success: true};

});
