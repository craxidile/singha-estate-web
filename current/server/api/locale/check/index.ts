import {localeExists} from "~/server/utils/locales";

export default defineEventHandler(async (event) => {

  const { locale } = getQuery(event);

  return {
    success: await localeExists(locale as string),
  };

});
