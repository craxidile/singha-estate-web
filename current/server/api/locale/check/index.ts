import login from "~/server/utils/login";
import axios from "axios";

export default defineEventHandler(async (event) => {

  const { locale } = getQuery(event);

  const token = await login();

  const apiBaseUrl = process.env.API_BASE_URL;
  const url = `${apiBaseUrl}/i18n/locales`;
  const response = await axios.get(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const { data: locales = [] } = response;

  return {
    success: locales.some((l: any) => l.code === locale),
  };

});
