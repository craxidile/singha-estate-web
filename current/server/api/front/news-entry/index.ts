import axios from 'axios';

import login from '~/server/utils/login';

export default defineEventHandler(async (event) => {

  const query = getQuery(event);
  const { locale = 'th' } = query;

  const token = await login();

  const apiBaseUrl = process.env.API_BASE_URL;
  const url = `${apiBaseUrl}/news-entries?populate[category]=*&populate[media][populate]=*`
    + `&locale=${locale}&sort[0]=id:desc&&pagination[pageSize]=3`;

  const response = await axios.get(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const { data: responseData = {} } = response;
  const { data, meta } = responseData;

  return {
    success: true,
    meta,
    data,
  };

});
